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

### ✅ User Features
- Register/Login with authentication
- Browse and book online poojas and pandits
- View and buy religious products
- Read religious blogs
- Add items to cart and complete purchases
- View live bhajans and pooja streams
- View order/booking history
- View user profile

### ✅ Admin Features
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
├── .env
├── .gitignore
├── eslint.config.js
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
├── vite.config.js
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:5000/api
VITE_GOOGLE_API_KEY=your-google-api-key
```

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

## 🎨 Styling & UI

- Tailwind CSS is used for styling.
- Customize the design in `/src/index.css` or extend utility classes as needed.

---

## 📦 Sample API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | User login |
| GET  | `/products` | Get all products |
| GET  | `/blogs` | Get blog list |
| POST | `/booking/create` | Create a pooja booking |
| POST | `/admin/add-product` | Admin adds a new product |

---

## 🔧 Additional Features

- 🛒 Cart management with local state
- 🎥 Live Bhajan/Yagya via YouTube links
- 🔄 Loader & Error handling for better UX
- 📜 TypeScript support in `/types/`
- 🧘‍♂️ Hindu-themed fonts and color palette

---

## 🎯 Future Enhancements

- 🌍 Multilingual support (Hindi/English)
- 📱 Responsive design improvements
- 🛒 Order tracking system
- 🔔 Notification and alert system
- 🌐 Convert to Progressive Web App (PWA)
- 📲 Mobile app version

---

## 🤝 Contributing

We welcome contributions to enhance the Religious Website!  
To contribute:

1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Push to your fork  
5. Submit a pull request 🎉

---

## 📧 Contact

- 📩 Email: **support@religiouswebsite.com**  
- 🌐 Website: [www.religiouswebsite.com](http://www.religiouswebsite.com)

---

🙏 Thank you for helping bring spirituality and technology together.
