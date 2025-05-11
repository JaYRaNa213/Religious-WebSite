// src/pages/admin/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/manage-blogs">Manage Blogs</Link></li>
          <li><Link to="/admin/manage-products">Manage Products</Link></li>
          <li><Link to="/admin/manage-puja-bookings">Manage Puja Bookings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
