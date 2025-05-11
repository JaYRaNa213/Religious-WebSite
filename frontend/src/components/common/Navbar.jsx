import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-purple-700 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🕉️ DharmaSite
      </Link>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blogs" className="hover:underline">Blogs</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/booking" className="hover:underline">Booking</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="bg-blue-600 p-4">
//     <ul className="flex justify-around text-white">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/blogs">Blogs</Link></li>
//       <li><Link to="/puja">Puja Booking</Link></li>
//       <li><Link to="/cart">Cart</Link></li>
//       <li><Link to="/profile">Profile</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;
