import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Products from '../pages/Products';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/products" element={<Products />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="NotFound" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
