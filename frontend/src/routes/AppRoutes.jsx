// File: src/routes/AppRoutes.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

// Pages (Public)
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BlogList from '../pages/blog/BlogList';
import BookingForm from '../pages/booking/BookingForm';
import PaymentSuccess from '../pages/payments/PaymentSuccess';
import NotFound from '../pages/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Admin Pages (Example)
import Dashboard from '../pages/admin/Dashboard';
import ManageUsers from '../pages/admin/ManageUsers';

// Helpers: PrivateRoute
const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const AdminRoute = ({ element }) => {
  const isAdmin = localStorage.getItem('role') === 'admin';
  return isAdmin ? element : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* Main Public Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="booking" element={<BookingForm />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Admin Layout */}
        <Route path="/admin" element={<PrivateRoute element={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<AdminRoute element={<ManageUsers />} />} />
        </Route>

        {/* Catch All: 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
