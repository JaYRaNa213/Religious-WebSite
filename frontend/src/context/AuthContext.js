import React, { createContext, useState, useEffect } from 'react';
import { fetchUserProfile } from '../services/authService'; // adjust path if needed

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from token
  const loadUser = async () => {
    try {
      const userData = await fetchUserProfile();
      setUser(userData);
    } catch (err) {
      console.error('Error loading user:', err);
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      loadUser();
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
