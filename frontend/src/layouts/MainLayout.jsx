import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout" style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#fff',
};

export default MainLayout;



// const MainLayout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-1 p-6 bg-white">{children}</main>
//       <Footer />
//     </div>
//   );
// };
