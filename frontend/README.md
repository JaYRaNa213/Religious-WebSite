
# 🌸 Religious Website Frontend 🌸
<<<<<<< HEAD

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
=======
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
<<<<<<< HEAD
=======
To start the local development server:
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```bash
npm run dev
```

<<<<<<< HEAD
### 3. 🌐 Open in Browser
```
http://localhost:5173
=======
### 3. 🌐 Open Browser
Visit the following URL in your browser:
```
http://localhost:3000
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```

---

<<<<<<< HEAD
## 📁 Project Directory Structure

```
📂 religious-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── shared/
│   │       └── Button.jsx
│   ├── constants/
│   │   ├── apiRoutes.js
│   │   ├── appLabels.js
│   │   └── userRoles.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useCart.js
│   ├── layouts/
│   │   ├── AdminLayout.jsx
│   │   └── UserLayout.jsx
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AddBlogPost.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── AddLiveVideo.jsx
│   │   │   └── ManageProducts.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── user/
│   │   │   ├── Home.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── PujaBooking.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── AdminRoutes.jsx
│   │   └── UserRoutes.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── userService.js
│   │   └── adminService.js
│   ├── types/
│   │   └── user.d.ts
│   └── utils/
│       ├── helpers.js
│       └── cloudinaryUpload.js
├── .env
├── .gitignore
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
=======
## 🔥 Directory Structure
Here’s an overview of the **frontend folder structure:**

```
📂 RELIGIOUS_WEB
└── 📂 frontend
    ├── 📂 public
    │   ├── favicon.ico
    │   └── images
    │       └── logo.png
    ├── 📂 src
    │   ├── 📂 api
    │   │   ├── authAPI.js
    │   │   ├── blogAPI.js
    │   │   ├── bookingAPI.js
    │   │   ├── emailAPI.js
    │   │   ├── paymentAPI.js
    │   │   └── productAPI.js
    │   ├── 📂 assets
    │   │   ├── 📂 css
    │   │   │   └── styles.css
    │   │   └── 📂 js
    │   │       └── utils.js
    │   ├── 📂 components
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Loader.jsx
    │   │   └── Navbar.jsx
    │   ├── 📂 config
    │   │   └── axiosConfig.js
    │   ├── 📂 context
    │   │   └── AuthContext.js
    │   ├── 📂 hooks
    │   │   └── useAuth.js
    │   ├── 📂 layouts
    │   │   ├── AdminLayout.jsx
    │   │   └── MainLayout.jsx
    │   ├── 📂 pages
    │   │   ├── 📂 auth
    │   │   │   ├── Login.jsx
    │   │   │   └── Register.jsx
    │   │   ├── 📂 blog
    │   │   │   └── BlogList.jsx
    │   │   ├── 📂 booking
    │   │   │   └── BookingForm.jsx
    │   │   ├── 📂 payments
    │   │   │   └── PaymentSuccess.jsx
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Home.jsx
    │   │   └── NotFound.jsx
    │   ├── 📂 routes
    │   │   └── AppRoutes.jsx
    │   ├── 📂 services
    │   │   ├── authService.js
    │   │   ├── blogService.js
    │   │   ├── bookingService.js
    │   │   ├── emailService.js
    │   │   ├── paymentService.js
    │   │   └── productService.js
    │   ├── 📂 store
    │   │   ├── actions.js
    │   │   └── reducers.js
    │   ├── 📂 utils
    │   │   ├── apiErrorHandler.js
    │   │   ├── constants.js
    │   │   └── formValidation.js
    │   ├── App.js
    │   └── server.js
    ├── 📂 .vscode
    │   └── settings.json
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── tree.js
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```

---

<<<<<<< HEAD
## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=http://localhost:7000/api
VITE_GOOGLE_API_KEY=your-google-api-key
=======
## ⚙️ Environment Variables
Create a `.env` file in the **root directory** and include the following variables:

```
# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:7000/api

# Port where frontend runs
PORT=3000

# Node environment (development/production)
NODE_ENV=development

# Google API key (if needed for maps or reCAPTCHA)
REACT_APP_GOOGLE_API_KEY=your-google-api-key

# JWT Secret (for user token if needed)
REACT_APP_JWT_SECRET=your-jwt-secret
>>>>>>> 3893ef26be9d5a6bc3231cc3d58acb59786475dd
```

---

<<<<<<< HEAD
## 🧭 Routing Overview

| Path | Component | Access |
|------|-----------|--------|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/products` | Product List | User |
| `/cart` | Cart | User |
| `/puja-booking` | Book Pooja | User |
| `/blog` | Blogs | Public |
| `/profile` | User Profile | Authenticated |
| `/admin` | Admin Dashboard | Admin |
| `/admin/add-product` | Add Product | Admin |
| `/admin/add-blog` | Add Blog | Admin |

---

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
