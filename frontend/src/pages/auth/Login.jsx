// path: frontend/src/pages/auth/Login.jsx
// Login.jsx

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import apiErrorHandler from '../../utils/apiErrorHandler';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', formData);
      login(response.data.user);
      localStorage.setItem('authToken', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      const errorMessage = apiErrorHandler(error);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        {/* Login Button */}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
