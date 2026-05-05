═════════════════════════════════════════════════════════════════════════════
                      MINEFOX HOSTING - GitHub Pages Version
                              v1.0 Static Build
═════════════════════════════════════════════════════════════════════════════

🎉 WELCOME TO MINEFOX HOSTING - STATIC GITHUB PAGES VERSION

This is a complete, fully functional static website built with:
✓ Pure HTML (No PHP)
✓ CSS (No build tools)
✓ Vanilla JavaScript
✓ localStorage for demo authentication
✓ GitHub Pages compatible

═════════════════════════════════════════════════════════════════════════════

🚀 QUICK START - DEPLOY TO GITHUB PAGES

1. Create a GitHub Repository
   └─ Name: yourusername.github.io
   └─ Or: minefox-hosting (if deploying to project pages)

2. Upload Files
   └─ Clone this folder to your local machine
   └─ Push all files to GitHub
   └─ GitHub will automatically deploy

3. Access Your Site
   └─ If personal repo: https://yourusername.github.io
   └─ If project repo: https://yourusername.github.io/minefox-hosting

That's it! No build process, no servers required!

═════════════════════════════════════════════════════════════════════════════

📁 FILE STRUCTURE

minefox-hosting/
├── index.html           - Home page
├── pricing.html         - Pricing plans
├── login.html           - User login
├── register.html        - User registration
├── dashboard.html       - User dashboard
├── payment.html         - Payment form
├── success.html         - Payment success
├── admin.html           - Admin panel
├── assets/
│   ├── css/
│   │   └── style.css    - Complete styling
│   ├── js/
│   │   └── script.js    - All JavaScript logic
│   └── images/
│       ├── logo.png     - Logo
│       └── banner.png   - Banner
└── README.txt           - This file

═════════════════════════════════════════════════════════════════════════════

🔐 AUTHENTICATION (Using localStorage)

Demo Admin Account (Pre-loaded):
Email: admin@minefox.site
Password: MineFoxBorisMitko@30

How It Works:
1. All user data stored in browser's localStorage
2. Each user can register new accounts
3. Admin account available for demo
4. Data persists until browser storage is cleared
5. Each browser has separate data (not shared)

⚠️ IMPORTANT: This is demo/development only
   For production, use real backend with secure authentication!

═════════════════════════════════════════════════════════════════════════════

💰 PRICING (All in EUR)

Starter €2.50/month
├─ 2GB RAM, 1 CPU, 10GB Storage, 20 Slots

Professional €5.99/month
├─ 4GB RAM, 2 CPU, 30GB Storage, 50 Slots

Elite €11.00/month
├─ 8GB RAM, 4 CPU, 100GB Storage, 150 Slots

Ultimate €19.00/month
├─ 16GB RAM, 8 CPU, 250GB Storage, 300+ Slots

═════════════════════════════════════════════════════════════════════════════

📋 FEATURES INCLUDED

User Features:
✓ User registration & login
✓ 2-day free trial (demo)
✓ Browse 4 pricing plans
✓ Submit payment demo
✓ User dashboard
✓ Trial status tracking
✓ Payment history

Admin Features:
✓ Admin dashboard with stats
✓ Approve/reject demo payments
✓ View all payments
✓ View all users
✓ Monitor active trials
✓ Payment reference tracking

Technical:
✓ Responsive design (mobile/tablet/desktop)
✓ Dark theme with orange accents
✓ localStorage for session management
✓ No external dependencies
✓ Fast loading times
✓ SEO friendly
✓ GitHub Pages ready

═════════════════════════════════════════════════════════════════════════════

🎯 WORKFLOW EXAMPLE - HOW TO TEST

1. Register New Account
   └─ Go to register.html
   └─ Create account with email & password
   └─ Login with new credentials

2. View Pricing
   └─ Browse plans on pricing.html
   └─ Click "Choose Plan"
   └─ Redirects to payment (requires login)

3. Submit Demo Payment
   └─ Fill dummy card details (any format accepted)
   └─ Click "Pay"
   └─ Shows payment reference
   └─ Redirects to success page

4. Approve Payment (Admin)
   └─ Login as admin@minefox.site
   └─ Go to admin.html
   └─ View pending payment
   └─ Click "Approve"
   └─ Payment status changes to "paid"
   └─ User plan automatically activated

5. Verify Access
   └─ User's dashboard shows active plan
   └─ User can access server management
   └─ Plan appears in user profile

═════════════════════════════════════════════════════════════════════════════

💾 DEMO DATA

What's Pre-loaded:
✓ Admin account (admin@minefox.site / MineFoxBorisMitko@30)
✓ All pricing plans
✓ Empty users list (start from scratch)
✓ Empty payments list
✓ Empty trials list

localStorage Keys Used:
- minefox_initialized       (initialization flag)
- minefox_users            (all user accounts)
- minefox_payments         (all payments)
- minefox_trials           (all trials)
- minefox_currentUser      (logged in user)

═════════════════════════════════════════════════════════════════════════════

⚙️ CUSTOMIZATION

Change Colors (assets/css/style.css):
--primary: #FF6A00;      (Orange)
--bg-main: #0B0B0F;      (Dark)
--text-primary: #FFFFFF; (White)

Change Pricing (assets/js/script.js):
Edit PLANS object with your prices

Change Admin Credentials (assets/js/script.js):
Edit DEMO_ADMIN object

Change Site URLs:
Update all href links in HTML files

═════════════════════════════════════════════════════════════════════════════

🌐 DEPLOYING TO GITHUB PAGES

Step-by-Step:

1. Create GitHub Account
   └─ Go to github.com
   └─ Sign up or login

2. Create Repository
   └─ Click "+" → New repository
   └─ Name: yourusername.github.io
   └─ Make it PUBLIC
   └─ Create

3. Clone Repository
   └─ git clone https://github.com/yourusername/yourusername.github.io
   └─ cd yourusername.github.io

4. Add Files
   └─ Copy all minefox files here
   └─ Keep the structure as is

5. Commit & Push
   └─ git add .
   └─ git commit -m "Add MineFox Hosting"
   └─ git push origin main

6. Access Your Site
   └─ Visit https://yourusername.github.io
   └─ Should load immediately!

Custom Domain? (Optional)
   └─ Add CNAME file with yourdomain.com
   └─ Configure DNS at your domain registrar
   └─ GitHub will show instructions

═════════════════════════════════════════════════════════════════════════════

🔒 SECURITY NOTES

GitHub Pages Security:
✓ No server-side code exposed
✓ No sensitive data stored
✓ All processing happens client-side
✓ SSL/HTTPS automatically enabled
✓ Safe for public deployment

⚠️ IMPORTANT LIMITATIONS:

This is a DEMO version:
✗ No real payment processing (just demo form)
✗ No backend database
✗ No email notifications
✗ No real authentication (localStorage only)
✗ Data lost if browser storage cleared
✗ Not for production use

For Production:
→ Add a real backend (PHP, Node.js, Python, etc.)
→ Integrate real payment gateway (Stripe, PayPal)
→ Use secure database (MySQL, PostgreSQL)
→ Implement proper authentication (JWT, OAuth)
→ Add SSL/HTTPS certificates
→ Enable CORS properly

═════════════════════════════════════════════════════════════════════════════

📱 FEATURES BY PAGE

index.html (Home)
├─ Hero section with CTA
├─ 6 feature cards
├─ Stats showcase
├─ Final CTA section
└─ Navigation with dynamic auth

pricing.html (Pricing)
├─ Hero with tagline
├─ 4 dynamic pricing cards
├─ FAQ section
├─ Plan selection logic
└─ Requires login to purchase

login.html (Authentication)
├─ Email & password form
├─ Demo admin credentials shown
├─ Error handling
├─ Redirect to dashboard
└─ localStorage integration

register.html (Registration)
├─ Username, email, password form
├─ Password validation
├─ Auto-login after registration
├─ Error messages
└─ Duplicate email detection

dashboard.html (User Panel)
├─ Sidebar with profile
├─ 4 status cards
├─ Trial countdown
├─ Plan display
├─ Free trial button
├─ Action buttons
└─ Admin link if admin

payment.html (Checkout)
├─ Plan summary
├─ Cardholder form
├─ Card number, expiry, CVC
├─ Order summary
├─ Spec list
├─ Demo payment notice
└─ Redirect to success

success.html (Confirmation)
├─ Success message
├─ Payment reference shown
├─ Next steps explained
├─ Back to dashboard link
└─ Simple confirmation

admin.html (Admin Panel)
├─ Dashboard statistics
├─ Pending payments table
├─ All payments table
├─ All users table
├─ Active trials table
├─ Approve/reject buttons
├─ Auto-refresh data
└─ Full CRUD operations

═════════════════════════════════════════════════════════════════════════════

🐛 TROUBLESHOOTING

"Page not found" on GitHub Pages
→ Make sure all files are in root directory
→ Check that index.html exists
→ Refresh browser cache

"JavaScript not working"
→ Check browser console (F12)
→ Ensure script.js loads
→ Clear localStorage if corrupted

"localStorage full"
→ Clear browser data
→ Remove old demo accounts
→ In DevTools: Application → Clear storage

"Styles not loading"
→ Verify style.css path is correct
→ Check network tab in DevTools
→ Ensure CSS file exists in assets/css/

Cannot see admin link
→ Must login as admin@minefox.site
→ is_admin flag must be true
→ Check localStorage values

═════════════════════════════════════════════════════════════════════════════

💡 TIPS & TRICKS

Test Scenario 1: Full User Journey
1. Register new account
2. Start free trial
3. View trial countdown
4. Choose plan after trial
5. Submit demo payment
6. Get payment reference

Test Scenario 2: Admin Approval
1. Login as admin
2. Go to admin panel
3. See pending payment
4. Approve payment
5. Check user plan updated
6. User can now access

Test Scenario 3: Multiple Users
1. Open two browser tabs
2. Login different users in each
3. See separate dashboards
4. Approve payment in one
5. Check other user unaffected

Test Scenario 4: Data Persistence
1. Register account
2. Close browser
3. Reopen site
4. Login with same email
5. Account still exists!

═════════════════════════════════════════════════════════════════════════════

📚 JAVASCRIPT FUNCTIONS REFERENCE

Authentication:
- register(username, email, password, confirmPassword)
- login(email, password)
- logout()
- getCurrentUser()
- isLoggedIn()
- isAdmin()

Payment:
- submitPayment(plan, cardData)
- approvePayment(paymentId)
- rejectPayment(paymentId)
- getAllPayments()

Trials:
- startTrial(userId)
- getTrialStatus(userId)
- canAccessServer(userId)

Users:
- getAllUsers()
- getAllTrials()

Utilities:
- formatPrice(price)
- formatDate(dateString)
- hashPassword(password)

═════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST FOR DEPLOYMENT

Before publishing to GitHub Pages:

□ All HTML files present
□ CSS file in assets/css/
□ JavaScript in assets/js/
□ Images in assets/images/
□ README.txt included
□ Links working correctly
□ Responsive design tested
□ Forms functioning
□ localStorage working
□ Admin login works
□ Payment demo works
□ No console errors
□ Page loads fast
□ Mobile friendly
□ All pages accessible

═════════════════════════════════════════════════════════════════════════════

🎊 YOU'RE READY!

Your MineFox Hosting static site is complete and ready for GitHub Pages!

Next Steps:
1. Create GitHub repository
2. Push files to GitHub
3. Enable GitHub Pages in settings
4. Share your URL: https://yourusername.github.io
5. Start accepting demo payments!

For Production:
→ Integrate real backend
→ Add payment gateway
→ Implement secure authentication
→ Deploy to hosting service

═════════════════════════════════════════════════════════════════════════════

                 MineFox Hosting v1.0 - GitHub Pages Ready!
              Pure HTML • CSS • Vanilla JavaScript • No Build Tools

═════════════════════════════════════════════════════════════════════════════
