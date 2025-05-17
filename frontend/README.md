
# 🌸 Religious Website Frontend 🌸


This is the **frontend** for a full-featured Hindu Religious Web Application, built using **React.js (Vite)** and styled with **Tailwind CSS**. It offers a rich user and admin experience for booking poojas, buying religious products, reading blogs, watching live bhajans, and more.

---

## 📚 Tech Stack

- ⚛️ **React (with Vite)** – Fast build tool for modern React apps  
- 🎨 **Tailwind CSS** – Utility-first CSS framework for responsive styling  
- 🔀 **React Router DOM** – For client-side routing  
- 🧠 **Context API + Custom Hooks** – For authentication and global state management  
- 🔐 **Protected Routes** – User/Admin-based route protection  
- 🔗 **Axios** – For HTTP requests  
- 🧰 **Reusable Components** – Built-in common UI elements (Navbar, Footer, Loader, etc.)

---

## 🎯 Key Functionalities

### ✅ **User Features**
- Register/Login with authentication
- Browse and book online poojas and pandits
- View and buy religious products
- Read religious blogs
- Add items to cart and complete purchases
- View live bhajans and pooja streams
- View order/booking history
- View user profile

### ✅ **Admin Features**
- Admin dashboard access
- Add/manage religious products
- Add/manage blog posts
- Add/manage live video links
- Monitor user activity
- Handle bookings and payment status
- Role-based routing protection

---

## 🚀 Getting Started Locally

### 1. 📦 Install Dependencies
======
This is the **frontend** for the Religious Website, built using modern web technologies such as **React.js / Next.js**. The platform provides a seamless and responsive user experience with dynamic content, user authentication, and multiple functionalities, including **Pooja booking, religious product sales, blogs, and more**.

---

## 📚 Tech Stack
This project leverages a powerful combination of frontend technologies:

- ⚛️ **React / Next.js** – For building dynamic, server-rendered pages and enhancing SEO.
- 🎨 **Tailwind CSS / Bootstrap** – For responsive and modern UI design.
- 🔥 **Axios** – To handle HTTP requests between the frontend and backend.
- 🧠 **Redux / Context API** – For efficient global state management.
- 🌐 **React Router** – For smooth navigation and routing.

---

## 🎯 Key Features
✅ User Authentication (Login/Register)  
✅ Pooja and Pandit Booking System  
✅ Online Religious Product Store  
✅ Blog Management and Reading  
✅ Payment Gateway Integration  
✅ Contact Form with Validation  
✅ Admin Panel for Managing Content  

---

## 🚀 How to Run Locally
Follow these steps to set up and run the frontend:

### 1. 📦 Install Dependencies
Run the following command to install required packages:
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```bash
npm install
```

### 2. 🖥️ Start Development Server

```bash
npm run dev
```


### 3. 🌐 Open in Browser

```
http://localhost:xxxx


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



## 📁 Project Directory Structure


📂 Religious Website Frontend Tree Structure

```

├── .env
├── .gitignore
├── eslint.config.js
├── frontend_tree.txt
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── common
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── shared
│   │       └── Button.jsx
│   ├── constants
│   │   ├── apiRoutes.js
│   │   ├── appLabels.js
│   │   └── userRoles.js
│   ├── context
│   │   └── AuthContext.jsx
│   ├── hooks
│   │   ├── useAuth.js
│   │   └── useCart.js
│   ├── index.css
│   ├── layouts
│   │   ├── AdminLayout.jsx
│   │   └── UserLayout.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── admin
│   │   │   ├── AddBlogPost.jsx
│   │   │   ├── AddLiveVideo.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── ManageProducts.jsx
│   │   ├── auth
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── user
│   │       ├── Blog.jsx
│   │       ├── Booking.jsx
│   │       ├── Cart.jsx
│   │       ├── Home.jsx
│   │       ├── Products.jsx
│   │       ├── PujaBooking.jsx
│   │       └── UserProfile.jsx
│   ├── routes
│   │   ├── AdminRoutes.jsx
│   │   ├── AppRoutes.jsx
│   │   └── UserRoutes.jsx
│   ├── services
│   │   ├── adminService.js
│   │   ├── api.js
│   │   └── userService.js
│   ├── types
│   │   └── user.d.ts
│   └── utils
│       ├── cloudinaryUpload.js
│       └── helpers.js
├── tailwind.config.js
├── tree.js
└── vite.config.js

```
=


## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=http://localhost:xxxx/api
VITE_GOOGLE_API_KEY=your-google-api-key
```

## 🛠️ Build for Production

```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
=======
## 🎨 Styling & UI
- Tailwind CSS or Bootstrap is used for styling.
- You can customize styles by editing `styles.css` located in:
```
/src/assets/css/styles.css
```

---

## 🛠️ Deployment
### Build Production Files
```bash
npm run build
```
### Run Production Server
```bash
npm run start
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```

---

<<<<<<< HEAD
## 📦 API Endpoints Used (Sample)

| API Route | Purpose |
|-----------|---------|
| `/auth/register` | Register new user |
| `/auth/login` | User login |
| `/products` | Get all products |
| `/blogs` | Get blog list |
| `/booking/create` | Create pooja booking |
| `/admin/add-product` | Admin adds new product |

---

## 🔧 Additional Features

- 📦 Cart Management with local state
- 🧘 Hindu-centric color palette and fonts
- 🎥 Live Bhajan/Yagya video support via YouTube links
- 🔄 Loader and Error components for better UX
- 📜 Typescript support in `/types/`

---

## 🎯 Future Plans

- 🌍 Language toggle (Hindi, English, etc.)
- 📱 Mobile responsive layout improvements
- 🛒 Order tracking page
- 🔔 Notification & alert system
- 🌐 Progressive Web App (PWA) version
=======
## 🧩 APIs & Routes Overview
- `/auth/login` – User login
- `/auth/register` – User registration
- `/booking/create` – Create booking
- `/product/list` – Fetch product list
- `/blog/list` – Get all blogs
- `/payment/confirm` – Confirm payments
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd

---

## 🤝 Contributing
<<<<<<< HEAD

We welcome open-source contributions.  
Steps to contribute:

1. Fork this repository  
2. Create a new branch  
3. Make your changes  
4. Push to your fork  
5. Submit a Pull Request 🎉
=======
We welcome contributions to enhance the Religious Website!  
To contribute:
- Fork the repository.
- Create a new branch.
- Make your changes and commit.
- Submit a pull request. 🎉

---

## 🎉 Future Enhancements
- 📱 Mobile App Integration  
- 🧑‍💼 Admin Dashboard for Advanced Controls  
- 🕉️ Multilingual Support for Broader Reach  
- 🛍️ Advanced Search & Filters  
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd

---

## 📧 Contact
<<<<<<< HEAD

- 📩 Email: **support@religiouswebsite.com**  
- 🌐 Website: [www.religiouswebsite.com](http://www.religiouswebsite.com)

---

🙏 Thank you for contributing to the blend of spirituality and technology.
=======
For any inquiries or support, feel free to contact:
- 📩 **Email:** support@religiouswebsite.com
- 🌐 **Website:** [Religious Website](http://www.religiouswebsite.com)
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
