
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
```bash
npm install
```

### 2. 🖥️ Start Development Server
```bash
npm run dev
```

### 3. 🌐 Open in Browser
```
http://localhost:5173
```

---

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
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=http://localhost:7000/api
VITE_GOOGLE_API_KEY=your-google-api-key
```

---

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
```

---

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

---

## 🤝 Contributing

We welcome open-source contributions.  
Steps to contribute:

1. Fork this repository  
2. Create a new branch  
3. Make your changes  
4. Push to your fork  
5. Submit a Pull Request 🎉

---

## 📧 Contact

- 📩 Email: **support@religiouswebsite.com**  
- 🌐 Website: [www.religiouswebsite.com](http://www.religiouswebsite.com)

---

🙏 Thank you for contributing to the blend of spirituality and technology.
