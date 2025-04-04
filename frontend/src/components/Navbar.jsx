// src/components/Navbar.jsx

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header>
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
    </header>
  );
};

export default Navbar;


// // Tailwind-based Navbar.jsx (optional future setup)

// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <header className="bg-gray-800 text-white">
//       <nav className="max-w-7xl mx-auto px-4 py-4">
//         <ul className="flex space-x-6 justify-center text-lg font-medium">
//           <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
//           <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
//           <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
//           <li><Link href="/blogs" className="hover:text-yellow-400">Blogs</Link></li>
//           <li><Link href="/booking" className="hover:text-yellow-400">Book Pooja</Link></li>
//           <li><Link href="/login" className="hover:text-yellow-400">Login</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
