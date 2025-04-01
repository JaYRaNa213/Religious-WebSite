// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/styles.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/blog">Blog</Link>
//         </li>
//         <li>
//           <Link to="/booking">Booking</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/booking">Book Pooja</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
