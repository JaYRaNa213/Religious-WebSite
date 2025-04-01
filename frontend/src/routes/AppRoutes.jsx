// // 📄 File: frontend/src/routes/AppRoutes.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Importing layouts
// import MainLayout from '../layouts/MainLayout';
// import AdminLayout from '../layouts/AdminLayout';

// // Importing pages
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import BlogList from '../pages/blog/BlogList';
// import BookingForm from '../pages/booking/BookingForm';
// import PaymentSuccess from '../pages/payments/PaymentSuccess';
// import NotFound from '../pages/NotFound';

// // Authentication and Protected Route Helper
// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = !!localStorage.getItem('authToken'); // Check if token exists
//   return isAuthenticated ? element : <Navigate to="/login" replace />;
// };

// // Admin Route Guard (Optional)
// const AdminRoute = ({ element }) => {
//   const isAdmin = localStorage.getItem('role') === 'admin'; // Check if admin
//   return isAdmin ? element : <Navigate to="/" replace />;
// };

// // AppRoutes Component
// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="blogs" element={<BlogList />} />
//           <Route path="booking" element={<BookingForm />} />
//           <Route path="payment-success" element={<PaymentSuccess />} />
//         </Route>

//         {/* Auth Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/admin/*" element={<PrivateRoute element={<AdminLayout />} />} />

//         {/* Catch All - 404 Not Found */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;


import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BlogList from '../pages/blog/BlogList';
import BookingForm from '../pages/booking/BookingForm';
import PaymentSuccess from '../pages/payments/PaymentSuccess';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import NotFound from '../pages/NotFound';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/blogs': BlogList,
  '/booking': BookingForm,
  '/payment-success': PaymentSuccess,
  '/login': Login,
  '/register': Register,
  '*': NotFound,
};

export default routes;
