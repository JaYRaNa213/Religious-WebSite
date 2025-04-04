import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header" style={headerStyle}>
      <div style={titleContainer}>
        <h1 style={titleStyle}>Religious Website</h1>
      </div>
      <Navbar />
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
};

const titleContainer = {
  marginBottom: '10px',
};

const titleStyle = {
  margin: 0,
  fontSize: '2rem',
};

export default Header;



// <header className="bg-gray-800 text-white text-center py-4">
//   <h1 className="text-2xl font-bold mb-2">Religious Website</h1>
//   <Navbar />
// </header>
