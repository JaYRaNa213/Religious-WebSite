
# 🌸 Religious Website Frontend 🌸
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
```bash
npm install
```

### 2. 🖥️ Start Development Server
To start the local development server:
```bash
npm run dev
```

### 3. 🌐 Open Browser
Visit the following URL in your browser:
```
http://localhost:3000
```

---

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
```

---

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
```

---

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
```

---

## 🧩 APIs & Routes Overview
- `/auth/login` – User login
- `/auth/register` – User registration
- `/booking/create` – Create booking
- `/product/list` – Fetch product list
- `/blog/list` – Get all blogs
- `/payment/confirm` – Confirm payments

---

## 🤝 Contributing
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

---

## 📧 Contact
For any inquiries or support, feel free to contact:
- 📩 **Email:** support@religiouswebsite.com
- 🌐 **Website:** [Religious Website](http://www.religiouswebsite.com)
