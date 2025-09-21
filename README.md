<div align="center">
  <img src="" alt="Alt Text" width="60" />
  <br/>
  <strong style="font-size: 2em;">E-commerce platform</strong>
</div>


ecommerce-platform/
├── .env.local                          # Environment variables
├── .env.example                        # Environment template
├── .gitignore
├── .eslintrc.json
├── next.config.js                      # Next.js configuration
├── package.json
├── tailwind.config.js                  # Tailwind CSS config
├── postcss.config.js
├── README.md
├── tsconfig.json                       # TypeScript config
├── middleware.ts                       # Auth & route protection
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── placeholder-product.jpg
│   │   └── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/                           # App Router (Next.js 13+)
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── loading.tsx                # Global loading UI
│   │   ├── error.tsx                  # Global error UI
│   │   ├── not-found.tsx              # 404 page
│   │   ├── globals.css                # Global styles
│   │   │
│   │   ├── (auth)/                    # Auth route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── products/                  # Product pages
│   │   │   ├── page.tsx               # Product listing
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx           # Product detail
│   │   │   └── category/
│   │   │       └── [slug]/
│   │   │           └── page.tsx       # Category pages
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx               # Shopping cart
│   │   │
│   │   ├── checkout/
│   │   │   ├── page.tsx               # Checkout form
│   │   │   ├── success/
│   │   │   │   └── page.tsx           # Order confirmation
│   │   │   └── cancel/
│   │   │       └── page.tsx           # Payment cancelled
│   │   │
│   │   ├── account/                   # User account pages
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Account dashboard
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── orders/
│   │   │   │   ├── page.tsx           # Order history
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Order details
│   │   │   └── addresses/
│   │   │       └── page.tsx
│   │   │
│   │   ├── seller/                    # Seller dashboard
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Seller dashboard
│   │   │   ├── products/
│   │   │   │   ├── page.tsx           # Product management
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx       # Add product
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx       # Product detail
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx   # Edit product
│   │   │   ├── orders/
│   │   │   │   ├── page.tsx           # Seller orders
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Order detail
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx           # Sales analytics
│   │   │   └── profile/
│   │   │       └── page.tsx           # Seller profile
│   │   │
│   │   ├── admin/                     # Admin panel
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Admin dashboard
│   │   │   ├── users/
│   │   │   │   ├── page.tsx           # User management
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # User details
│   │   │   ├── products/
│   │   │   │   ├── page.tsx           # Product oversight
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Product review
│   │   │   ├── orders/
│   │   │   │   ├── page.tsx           # All orders
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Order management
│   │   │   ├── categories/
│   │   │   │   └── page.tsx           # Category management
│   │   │   └── analytics/
│   │   │       └── page.tsx           # Platform analytics
│   │   │
│   │   └── api/                       # 🔥 API ROUTES (Backend Endpoints)
│   │       ├── auth/                  # Authentication APIs
│   │       │   ├── login/
│   │       │   │   └── route.ts       # POST /api/auth/login
│   │       │   ├── register/
│   │       │   │   └── route.ts       # POST /api/auth/register
│   │       │   ├── logout/
│   │       │   │   └── route.ts       # POST /api/auth/logout
│   │       │   └── reset-password/
│   │       │       └── route.ts       # POST /api/auth/reset-password
│   │       │
│   │       ├── products/              # Product APIs
│   │       │   ├── route.ts           # GET /api/products, POST /api/products
│   │       │   ├── [id]/
│   │       │   │   └── route.ts       # GET, PUT, DELETE /api/products/[id]
│   │       │   ├── search/
│   │       │   │   └── route.ts       # GET /api/products/search?q=term
│   │       │   ├── categories/
│   │       │   │   └── route.ts       # GET /api/products/categories
│   │       │   └── seller/
│   │       │       └── route.ts       # GET /api/products/seller (seller's products)
│   │       │
│   │       ├── cart/                  # Shopping Cart APIs
│   │       │   ├── route.ts           # GET /api/cart (get cart), DELETE /api/cart (clear)
│   │       │   ├── add/
│   │       │   │   └── route.ts       # POST /api/cart/add
│   │       │   ├── update/
│   │       │   │   └── route.ts       # PUT /api/cart/update
│   │       │   └── remove/
│   │       │       └── route.ts       # DELETE /api/cart/remove
│   │       │
│   │       ├── orders/                # Order Management APIs
│   │       │   ├── route.ts           # GET /api/orders (user orders), POST /api/orders (create)
│   │       │   ├── [id]/
│   │       │   │   └── route.ts       # GET, PUT /api/orders/[id]
│   │       │   ├── seller/
│   │       │   │   └── route.ts       # GET /api/orders/seller (seller orders)
│   │       │   └── status/
│   │       │       └── route.ts       # PUT /api/orders/status (update status)
│   │       │
│   │       ├── users/                 # User Management APIs
│   │       │   ├── route.ts           # GET /api/users (admin), POST /api/users
│   │       │   ├── [id]/
│   │       │   │   └── route.ts       # GET, PUT, DELETE /api/users/[id]
│   │       │   ├── profile/
│   │       │   │   └── route.ts       # GET, PUT /api/users/profile
│   │       │   └── addresses/
│   │       │       └── route.ts       # GET, POST, PUT, DELETE addresses
│   │       │
│   │       ├── payments/              # Payment Processing APIs
│   │       │   ├── create-intent/
│   │       │   │   └── route.ts       # POST /api/payments/create-intent
│   │       │   ├── confirm/
│   │       │   │   └── route.ts       # POST /api/payments/confirm
│   │       │   ├── webhook/
│   │       │   │   └── route.ts       # POST /api/payments/webhook (Stripe)
│   │       │   └── refund/
│   │       │       └── route.ts       # POST /api/payments/refund
│   │       │
│   │       ├── upload/                # File Upload APIs
│   │       │   ├── route.ts           # POST /api/upload (general)
│   │       │   ├── products/
│   │       │   │   └── route.ts       # POST /api/upload/products (product images)
│   │       │   └── avatar/
│   │       │       └── route.ts       # POST /api/upload/avatar (profile pics)
│   │       │
│   │       ├── categories/            # Category Management APIs
│   │       │   ├── route.ts           # GET, POST /api/categories
│   │       │   └── [id]/
│   │       │       └── route.ts       # GET, PUT, DELETE /api/categories/[id]
│   │       │
│   │       └── admin/                 # Admin-Only APIs
│   │           ├── analytics/
│   │           │   ├── route.ts       # GET /api/admin/analytics
│   │           │   ├── sales/
│   │           │   │   └── route.ts   # GET /api/admin/analytics/sales
│   │           │   └── users/
│   │           │       └── route.ts   # GET /api/admin/analytics/users
│   │           ├── users/
│   │           │   ├── route.ts       # GET /api/admin/users (all users)
│   │           │   └── [id]/
│   │           │       └── route.ts   # Admin user management
│   │           └── products/
│   │               ├── route.ts       # GET /api/admin/products (all products)
│   │               ├── approve/
│   │               │   └── route.ts   # PUT /api/admin/products/approve
│   │               └── reject/
│   │                   └── route.ts   # PUT /api/admin/products/reject
│   │
│   ├── components/                    # Reusable UI components
│   │   ├── ui/                        # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Spinner.tsx
│   │   │   └── index.ts               # Export all UI components
│   │   │
│   │   ├── layout/                    # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── auth/                      # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── PasswordReset.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── products/                  # Product-related components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductForm.tsx        # Add/Edit product
│   │   │   ├── ProductSearch.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ImageUpload.tsx
│   │   │
│   │   ├── cart/                      # Shopping cart components
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   ├── CartDropdown.tsx
│   │   │   └── MiniCart.tsx
│   │   │
│   │   ├── checkout/                  # Checkout components
│   │   │   ├── CheckoutForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   ├── ShippingForm.tsx
│   │   │   ├── OrderSummary.tsx
│   │   │   └── PaymentMethods.tsx
│   │   │
│   │   ├── orders/                    # Order components
│   │   │   ├── OrderCard.tsx
│   │   │   ├── OrderList.tsx
│   │   │   ├── OrderDetail.tsx
│   │   │   └── OrderStatus.tsx
│   │   │
│   │   ├── seller/                    # Seller dashboard components
│   │   │   ├── SellerStats.tsx
│   │   │   ├── ProductManager.tsx
│   │   │   ├── OrderManager.tsx
│   │   │   └── AnalyticsChart.tsx
│   │   │
│   │   ├── admin/                     # Admin components
│   │   │   ├── UserManager.tsx
│   │   │   ├── ProductReview.tsx
│   │   │   ├── AdminStats.tsx
│   │   │   └── PlatformAnalytics.tsx
│   │   │
│   │   └── common/                    # Shared components
│   │       ├── Loading.tsx
│   │       ├── ErrorBoundary.tsx
│   │       ├── Pagination.tsx
│   │       ├── SearchBar.tsx
│   │       ├── ImageGallery.tsx
│   │       └── ConfirmDialog.tsx
│   │
│   ├── lib/                          # Utility functions & configs
│   │   ├── auth.ts                   # Authentication utilities
│   │   ├── db.ts                     # Database connection
│   │   ├── stripe.ts                 # Payment processing
│   │   ├── upload.ts                 # File upload utilities
│   │   ├── email.ts                  # Email service
│   │   ├── utils.ts                  # General utilities
│   │   ├── validations.ts            # Form validation schemas
│   │   └── constants.ts              # App constants
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── useApi.ts
│   │   └── useProducts.ts
│   │
│   ├── context/                      # React Context providers
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── index.tsx
│   │
│   ├── models/                       # Database models & schemas
│   │   ├── User.ts                   # User model
│   │   ├── Product.ts                # Product model
│   │   ├── Category.ts               # Category model
│   │   ├── Order.ts                  # Order model
│   │   ├── OrderItem.ts              # Order items model
│   │   ├── Cart.ts                   # Cart model
│   │   ├── CartItem.ts               # Cart items model
│   │   ├── Address.ts                # Shipping address model
│   │   ├── Payment.ts                # Payment transaction model
│   │   ├── Review.ts                 # Product review model
│   │   └── index.ts                  # Export all models
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── auth.ts
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   ├── user.ts
│   │   ├── api.ts
│   │   └── index.ts
│   │
│   ├── services/                     # API service functions
│   │   ├── auth.service.ts
│   │   ├── product.service.ts
│   │   ├── cart.service.ts
│   │   ├── order.service.ts
│   │   ├── user.service.ts
│   │   ├── upload.service.ts
│   │   └── payment.service.ts
│   │
│   ├── store/                        # State management (Zustand/Redux)
│   │   ├── authStore.ts
│   │   ├── cartStore.ts
│   │   ├── productStore.ts
│   │   └── index.ts
│   │
│   └── styles/                       # Additional styles
│       ├── globals.css
│       ├── components.css
│       └── utilities.css
│
├── docs/                             # Project documentation
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── FEATURES.md
│   └── CONTRIBUTING.md
│
├── tests/                            # Test files
│   ├── __mocks__/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── utils/
│
└── scripts/                          # Build & deployment scripts
    ├── seed.ts                       # Database seeding
    ├── migrate.ts                    # Database migrations
    └── deploy.sh                     # Deployment script