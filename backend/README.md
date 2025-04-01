# 🖉️ Religious Website

This repository contains the backend of a ** Religious Website ** that provides various services such as online pooja bookings, pandit appointments, selling religious products, and more.

## 🌟 **Features**

1. 📚 **Selling Religious Books**
2. 🔥 **Pandit Booking System**
3. 🙏 **Online Pooja Completion**
4. 🚰️ **Mathura Blogs & Religious Blogs**
5. 🎥 **Aarti & Bhajan Streaming**
6. 💳 **Secure Payment Gateway Integration**
7. 📅 **Priest (Pandit) Appointments**
8. 🌐 **Multiple Language Support**
9. 🜡️ **Live Pooja Path & Bhajans**
10. 🗉️ **Hindu Festival Products Store**
11. 📞 **Contact Details & Customer Support**
12. 💌 **Query & Feedback Section**

---

## 🏠 **Backend Folder Structure**

```
backend/
├── config/
│   ├── db.config.js           # Database configuration
│   └── env.config.js          # Environment variables configuration
├── controllers/
│   ├── auth.controller.js     # Authentication controller
│   ├── booking.controller.js  # Booking-related logic
│   ├── product.controller.js  # Product-related logic
│   ├── blog.controller.js     # Blog management logic
│   └── payment.controller.js  # Payment-related logic
├── middleware/
│   ├── auth.middleware.js     # Middleware to protect routes
│   └── error.middleware.js    # Global error handling
├── models/
│   ├── user.model.js          # User schema and model
│   ├── booking.model.js       # Booking schema and model
│   ├── product.model.js       # Product schema and model
│   ├── blog.model.js          # Blog schema and model
│   └── payment.model.js       # Payment schema and model
├── routes/
│   ├── auth.routes.js         # Authentication routes
│   ├── booking.routes.js      # Booking routes
│   ├── product.routes.js      # Product routes
│   ├── blog.routes.js         # Blog routes
│   └── payment.routes.js      # Payment routes
├── services/
│   ├── email.service.js       # Email service to send notifications
│   └── payment.service.js     # Payment gateway integration
├── utils/
│   ├── email.utils.js         # Email utilities
│   ├── payment.utils.js       # Payment utilities
│   └── logger.js              # Logger configuration
├── views/
│   └── emails/
│       └── resetPassword.html # Email template for password reset
├── .env                       # Environment variables
├── .gitignore                 # Files to be ignored by Git
├── .prettierrc                 # Prettier configuration for code formatting
├── app.js                     # Main application entry point
├── server.js                   # Express server setup
└── package.json               # Project dependencies
```

---


## 🚀 **Getting Started**

### 1. ⚙️ **Clone the Repository**

```bash
git clone https://github.com/jay-prakash/religious-website.git
```

### 2. 📁 **Navigate to Backend Directory**

```bash
cd religious-website/backend
```

### 3. 📆 **Install Dependencies**

```bash
npm install
```

### 4. 💄 **Set Up Environment Variables**

Create a `.env` file in the root of the backend directory:

```bash
# .env file
PORT=5000
DB_URI=mongodb://localhost:27017/religious_website
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=smtp
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 5. 🛠️ **Run the Server**

```bash
# Start the server in production
npm start

# Run in development mode (with nodemon)
npm run dev
```

---

## 📚 **API Endpoints**

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/auth/reset-password` - Reset user password

### Booking
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create a new booking

### Product
- `GET /api/products` - Get all religious products
- `POST /api/products` - Add a new product

### Blog
- `GET /api/blogs` - Get all religious blogs
- `POST /api/blogs` - Add a new blog

### Payment
- `POST /api/payments/initiate` - Initiate a payment

---

## 💼 **Deployment Instructions**

### 1. 🔥 **Build and Deploy**

```bash
# Create a production build
npm run build
```

### 2. 💄 **Deploy to Production Server**

```bash
# Run the server
npm start
```

---

## 🔩 **Technologies Used**

- 💛 **Node.js** - JavaScript runtime for building APIs
- 🔥 **Express.js** - Web framework for Node.js
- 🟢 **MongoDB** - NoSQL database
- 🔒 **JWT** - Token-based authentication
- 📧 **Nodemailer** - Email service
- 💳 **Payment Gateway (Razorpay/Stripe/PayPal)** - For payment integration
- 📑 **Multer** - File uploads
- 🎨 **Figma Design** - UI/UX Design reference

---

## 👨‍💻 **Contributing**

Contributions, issues, and feature requests are welcome!

---

## 👩‍💻 **Contact**

**Author:** Jay Prakash  
📧 Email: [jayrana0909@gmail.com](mailto:jayrana0909@gmail.com)

---

## 💜 **License**

This project is licensed under the **ISC License**.
#


