import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Religious Website. All rights reserved.</p>
      <p>
        Developed by{' '}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4caf50', textDecoration: 'underline' }}
        >
          Jay Prakash
        </a>
      </p>
    </footer>
  );
};

export default Footer;



// <footer className="bg-gray-800 text-white text-center py-4">
//   <p>© 2025 Religious Website. All rights reserved.</p>
//   <p>
//     Developed by{' '}
//     <a
//       href="https://github.com/yourgithub"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-green-400 hover:underline"
//     >
//       Jay Prakash
//     </a>
//   </p>
// </footer>
