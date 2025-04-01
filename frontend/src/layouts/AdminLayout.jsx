import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-content">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
