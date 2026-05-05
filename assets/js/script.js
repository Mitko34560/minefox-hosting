// MineFox Hosting - Fixed Version (GitHub Pages Compatible)
// Stripe integration with automatic payment activation
// Admin credentials hidden in code only

const PLANS = {
    starter: { name: 'Starter', price: 2.50, ram: 2, cpu: 1, storage: 10, slots: 20, stripeId: 'price_starter' },
    professional: { name: 'Professional', price: 5.99, ram: 4, cpu: 2, storage: 30, slots: 50, stripeId: 'price_professional' },
    elite: { name: 'Elite', price: 11.00, ram: 8, cpu: 4, storage: 100, slots: 150, stripeId: 'price_elite' },
    ultimate: { name: 'Ultimate', price: 19.00, ram: 16, cpu: 8, storage: 250, slots: 300, stripeId: 'price_ultimate' }
};

// Admin credentials - HIDDEN (not displayed to users)
const DEMO_ADMIN = {
    email: 'admin@minefox.site',
    password: 'MineFoxBorisMitko@30'
};

// Stripe Public Key for GitHub Pages (demo - replace with real key in production)
const STRIPE_PUBLIC_KEY = 'pk_test_demo';

// Initialize demo data on first load
function initializeDemoData() {
    if (!localStorage.getItem('minefox_initialized')) {
        const demoUsers = {
            'admin@minefox.site': {
                id: 1,
                username: 'admin',
                email: 'admin@minefox.site',
                password: hashPassword(DEMO_ADMIN.password),
                plan: 'ultimate',
                is_admin: true,
                trials: [],
                payments: []
            }
        };
        
        localStorage.setItem('minefox_users', JSON.stringify(demoUsers));
        localStorage.setItem('minefox_payments', JSON.stringify([]));
        localStorage.setItem('minefox_trials', JSON.stringify([]));
        localStorage.setItem('minefox_initialized', 'true');
    }
}

// Simple hash function for demo purposes
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'hash_' + Math.abs(hash);
}

// Authentication functions
function register(username, email, password, confirmPassword) {
    if (!username || !email || !password || !confirmPassword) {
        return { success: false, message: 'All fields are required' };
    }
    
    if (username.length < 3) {
        return { success: false, message: 'Username must be at least 3 characters' };
    }
    
    if (!email.includes('@')) {
        return { success: false, message: 'Invalid email address' };
    }
    
    if (password.length < 8) {
        return { success: false, message: 'Password must be at least 8 characters' };
    }
    
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
    }
    
    const users = JSON.parse(localStorage.getItem('minefox_users') || '{}');
    
    if (users[email]) {
        return { success: false, message: 'Email already registered' };
    }
    
    const userId = Math.max(...Object.values(users).map(u => u.id || 0)) + 1;
    
    users[email] = {
        id: userId,
        username: username,
        email: email,
        password: hashPassword(password),
        plan: 'none',
        is_admin: false,
        trials: [],
        payments: []
    };
    
    localStorage.setItem('minefox_users', JSON.stringify(users));
    
    return { success: true, message: 'Registration successful! You can now login.' };
}

function login(email, password) {
    if (!email || !password) {
        return { success: false, message: 'Email and password are required' };
    }
    
    const users = JSON.parse(localStorage.getItem('minefox_users') || '{}');
    const user = users[email];
    
    if (!user) {
        return { success: false, message: 'Invalid email or password' };
    }
    
    if (user.password !== hashPassword(password)) {
        return { success: false, message: 'Invalid email or password' };
    }
    
    localStorage.setItem('minefox_currentUser', JSON.stringify({
        id: user.id,
        username: user.username,
        email: user.email,
        plan: user.plan,
        is_admin: user.is_admin
    }));
    
    return { success: true, message: 'Login successful!' };
}

function logout() {
    localStorage.removeItem('minefox_currentUser');
}

function getCurrentUser() {
    const user = localStorage.getItem('minefox_currentUser');
    return user ? JSON.parse(user) : null;
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.is_admin === true;
}

// Stripe payment processing - AUTOMATIC ACTIVATION
function processStripePayment(plan, stripePaymentIntentId) {
    const user = getCurrentUser();
    
    if (!user) {
        return { success: false, message: 'You must be logged in' };
    }
    
    if (!plan || !PLANS[plan]) {
        return { success: false, message: 'Invalid plan' };
    }
    
    const payments = JSON.parse(localStorage.getItem('minefox_payments') || '[]');
    
    const paymentId = Math.max(...payments.map(p => p.id || 0), 0) + 1;
    const reference = 'PI_' + stripePaymentIntentId;
    
    const payment = {
        id: paymentId,
        user_id: user.id,
        email: user.email,
        username: user.username,
        plan: plan,
        amount: PLANS[plan].price,
        currency: 'EUR',
        status: 'paid', // AUTOMATICALLY SET TO PAID
        reference: reference,
        stripe_payment_id: stripePaymentIntentId,
        created_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    
    payments.push(payment);
    localStorage.setItem('minefox_payments', JSON.stringify(payments));
    
    // AUTOMATICALLY ACTIVATE PLAN - NO ADMIN APPROVAL NEEDED
    const users = JSON.parse(localStorage.getItem('minefox_users') || '{}');
    if (users[user.email]) {
        users[user.email].plan = plan;
        localStorage.setItem('minefox_users', JSON.stringify(users));
        
        // Update current session
        const currentUser = getCurrentUser();
        currentUser.plan = plan;
        localStorage.setItem('minefox_currentUser', JSON.stringify(currentUser));
    }
    
    if (!users[user.email].payments) {
        users[user.email].payments = [];
    }
    users[user.email].payments.push(paymentId);
    localStorage.setItem('minefox_users', JSON.stringify(users));
    
    return {
        success: true,
        message: 'Payment successful! Your plan is now active.',
        reference: reference,
        paymentId: paymentId
    };
}

// Handle Stripe payment failure
function handlePaymentFailure(plan, error) {
    const user = getCurrentUser();
    
    if (!user) {
        return { success: false, message: 'You must be logged in' };
    }
    
    const payments = JSON.parse(localStorage.getItem('minefox_payments') || '[]');
    const paymentId = Math.max(...payments.map(p => p.id || 0), 0) + 1;
    
    const payment = {
        id: paymentId,
        user_id: user.id,
        email: user.email,
        username: user.username,
        plan: plan,
        amount: PLANS[plan].price,
        currency: 'EUR',
        status: 'failed',
        error_message: error,
        created_at: new Date().toISOString()
    };
    
    payments.push(payment);
    localStorage.setItem('minefox_payments', JSON.stringify(payments));
    
    return {
        success: false,
        message: 'Payment failed: ' + error
    };
}

function startTrial(userId) {
    const trials = JSON.parse(localStorage.getItem('minefox_trials') || '[]');
    
    // Check if user already has a trial
    const existingTrial = trials.find(t => t.user_id === userId);
    if (existingTrial) {
        return { success: false, message: 'You have already used your free trial' };
    }
    
    const trialId = Math.max(...trials.map(t => t.id || 0), 0) + 1;
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000);
    
    trials.push({
        id: trialId,
        user_id: userId,
        trial_start: startDate.toISOString(),
        trial_end: endDate.toISOString(),
        status: 'active'
    });
    
    localStorage.setItem('minefox_trials', JSON.stringify(trials));
    
    // Update user data
    const users = JSON.parse(localStorage.getItem('minefox_users') || '{}');
    const user = getCurrentUser();
    if (user && users[user.email]) {
        if (!users[user.email].trials) {
            users[user.email].trials = [];
        }
        users[user.email].trials.push(trialId);
        localStorage.setItem('minefox_users', JSON.stringify(users));
    }
    
    return { success: true, message: 'Trial started! You have 2 days of free access.' };
}

function getTrialStatus(userId) {
    const trials = JSON.parse(localStorage.getItem('minefox_trials') || '[]');
    const userTrial = trials.find(t => t.user_id === userId && t.status === 'active');
    
    if (!userTrial) return null;
    
    const now = new Date();
    const endDate = new Date(userTrial.trial_end);
    
    if (now > endDate) {
        // Mark as expired
        userTrial.status = 'expired';
        trials[trials.indexOf(userTrial)] = userTrial;
        localStorage.setItem('minefox_trials', JSON.stringify(trials));
        return null;
    }
    
    const timeRemaining = Math.floor((endDate - now) / (1000 * 60 * 60));
    
    return {
        ...userTrial,
        hoursRemaining: timeRemaining
    };
}

function canAccessServer(userId) {
    const users = JSON.parse(localStorage.getItem('minefox_users') || '{}');
    const payments = JSON.parse(localStorage.getItem('minefox_payments') || '[]');
    const user = getCurrentUser();
    
    if (!user) return false;
    
    // Check if user has active paid plan (Stripe payment)
    const activePayment = payments.find(p =>
        p.user_id === userId &&
        p.status === 'paid' &&
        new Date(p.expires_at) > new Date()
    );
    
    if (activePayment) return true;
    
    // Check if user has active trial
    const trial = getTrialStatus(userId);
    return trial !== null;
}

// Admin functions - View only, no manual approval
function getAllPayments() {
    return JSON.parse(localStorage.getItem('minefox_payments') || '[]');
}

function getAllUsers() {
    return Object.values(JSON.parse(localStorage.getItem('minefox_users') || '{}'));
}

function getAllTrials() {
    return JSON.parse(localStorage.getItem('minefox_trials') || '[]');
}

// UI Helper functions
function formatPrice(price) {
    return '€' + price.toFixed(2);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US') + ' ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function updateNavbar() {
    const navLinks = document.querySelector('.nav-menu');
    if (!navLinks) return;
    
    const user = getCurrentUser();
    
    // Remove existing auth links
    const existingLinks = navLinks.querySelectorAll('.auth-link');
    existingLinks.forEach(link => link.remove());
    
    if (user) {
        // Logged in
        navLinks.innerHTML += `
            <li><a href="dashboard.html" class="nav-link">Dashboard</a></li>
            <li><a href="#" onclick="logout(); location.href='login.html'; return false;" class="nav-link btn-nav">Logout</a></li>
        `;
    } else {
        // Not logged in
        navLinks.innerHTML += `
            <li><a href="login.html" class="nav-link btn-nav auth-link">Login</a></li>
        `;
    }
}

// Redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Redirect if not admin
function requireAdmin() {
    if (!isAdmin()) {
        window.location.href = 'dashboard.html';
    }
}

// Stripe Checkout - Mock for GitHub Pages (in production, use real Stripe JS)
function initiateStripeCheckout(plan) {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Store plan for checkout page
    localStorage.setItem('minefox_checkout_plan', plan);
    window.location.href = 'checkout.html?plan=' + plan;
}

// Mock Stripe payment (for demo on GitHub Pages)
function mockStripePayment(plan) {
    // Simulate Stripe payment success
    const paymentIntentId = 'pi_demo_' + Date.now();
    const result = processStripePayment(plan, paymentIntentId);
    
    if (result.success) {
        window.location.href = 'success.html?reference=' + result.reference;
    } else {
        alert('Payment failed: ' + result.message);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDemoData();
    updateNavbar();
});
