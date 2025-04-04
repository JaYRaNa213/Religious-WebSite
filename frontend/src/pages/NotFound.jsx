import React from 'react';
import { Link } from 'react-router-dom'; // or `next/link` if using Next.js

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="go-home-btn">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
