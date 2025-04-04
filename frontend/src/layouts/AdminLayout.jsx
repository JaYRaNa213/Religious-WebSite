import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout" style={layoutStyle}>
      <Header />
      <main className="admin-content" style={contentStyle}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#f4f4f4',
};

export default AdminLayout;




// const AdminLayout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Header />
//       <main className="flex-1 p-6">{children}</main>
//       <Footer />
//     </div>
//   );
// };
