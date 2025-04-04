// File: frontend/src/components/Loader.jsx
// Loader.jsx

import React from 'react';
import '../assets/css/styles.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
