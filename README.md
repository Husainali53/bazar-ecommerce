# 🛒 Bazar E-Commerce Platform - BohraPro

A **Myntra-style e-commerce marketplace** with complete order management, escrow payment system, seller verification, and real-time delivery tracking.

## 🏗️ Project Architecture

```
bazar-ecommerce/
├── server/
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── models/             # MongoDB schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Payment.js
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   │   ├── orderService.js
│   │   ├── paymentService.js
│   │   └── deliveryService.js
│   ├── middleware/         # Custom middleware
│   ├── jobs/              # Scheduled tasks
│   ├── app.js             # Express app
│   └── server.js          # Entry point
├── client/                # React frontend
├── .env                   # Environment variables
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas)
- npm/yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env .env.local
# Edit .env with your MongoDB URI and JWT secret

# 3. Start development server
npm run dev

# Server runs on: http://localhost:5000
```

## 👥 User Roles

| Role | Permissions |
|------|-------------|
| **Buyer** | Browse products, place orders, track shipments, raise disputes |
| **Seller** | Manage products, view orders, update shipment status, receive payouts |
| **Admin** | Full system access, dispute resolution, analytics |

## 📦 Core Features

### 🔐 Authentication
- JWT-based token authentication
- Role-based access control (RBAC)
- Password hashing with bcryptjs
- Session management

### 🛍️ Product Management
- CRUD operations with seller authorization
- Image handling
- Inventory management
- Search & filter by category
- Rating & reviews system

### 🛒 Order Management
- Complete order lifecycle with state transitions
- Real-time status tracking
- Order history for buyers and sellers
- Dispute resolution system

### 💳 Payment System (Escrow Model)
- Payment held at order creation
- Release only after delivery confirmation
- Automatic 10% platform commission
- Seller payout calculation
- Refund handling

### 🚚 Delivery & Tracking
- Automatic tracking ID generation
- Estimated delivery date calculation
- Integration ready for:
  - Shiprocket API
  - Delhivery API
  - Custom carriers

## 🔗 API Endpoints

### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
POST   /api/auth/logout        - Logout user
GET    /api/auth/profile       - Get user profile (protected)
```

### Products
```
GET    /api/products           - List all products (with pagination & filters)
GET    /api/products/:id       - Get product details
POST   /api/products           - Create product (seller only)
PUT    /api/products/:id       - Update product
DELETE /api/products/:id       - Delete product
```

### Orders
```
POST   /api/orders             - Create order (payment held)
GET    /api/orders/user/orders - Get buyer's orders
GET    /api/orders/seller/orders - Get seller's orders
PUT    /api/orders/:id/status  - Update order status
POST   /api/orders/:id/dispute - Raise dispute
```

### Payments
```
GET    /api/payments/:orderId/status - Check payment status
```

## 📊 Order Lifecycle

```
pending ──→ paid ──→ accepted ──→ packed ──→ shipped ──→ delivered ──→ completed
                                                                             ↓
                                                                    Payment Released
                                                                    (90% to seller)
```

### Dispute Flow
```
disputed ──→ under_review ──→ resolved (refund or continue)
```

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based auth with expiry
- ✅ Role-based access control
- ✅ CORS protection
- ✅ Input validation
- ✅ Environment variable protection
- ✅ Escrow payment protection

## 💰 Commission & Fees

```
Order Amount: ₹1000
Platform Commission: 10% = ₹100
Seller Receives: ₹900
```

Commission is held until delivery completion, then automatically released.

## 🔄 Technology Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **CORS**: Cross-Origin Resource Sharing enabled
- **Environment**: dotenv

## 📝 Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/bazar-ecommerce
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d
PLATFORM_COMMISSION=0.10
SHIPPING_PARTNER_COMMISSION=0.05
```

## 🧪 Testing API

Use **Postman** or **Thunder Client** to test endpoints:

```bash
# Register
POST http://localhost:5000/api/auth/register
Body: { "name": "John", "email": "john@example.com", "password": "pass123" }

# Login
POST http://localhost:5000/api/auth/login
Body: { "email": "john@example.com", "password": "pass123" }

# Create Product (with auth token)
POST http://localhost:5000/api/products
Headers: { "Authorization": "Bearer <token>" }
Body: { "title": "T-Shirt", "price": 500, "category": "clothing", "stock": 10 }
```

## 🚀 Future Enhancements

- [ ] Shiprocket & Delhivery integration
- [ ] Razorpay payment gateway integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics system
- [ ] Seller rating system
- [ ] Wishlist feature
- [ ] Cart system
- [ ] Coupon management
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For issues and questions, please create a GitHub issue or contact the maintainers.

---

**Made with ❤️ by Husainali53**
