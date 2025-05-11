import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await getUser();
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


// step 8
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
