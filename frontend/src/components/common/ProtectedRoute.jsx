import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  // ProtectedRoute.jsx
if (!user || user.role !== 'admin') return <Navigate to="/" />;

  const { user, loading } = useAuth();

  if (loading) return <p className="text-center">Loading...</p>;

  return user ? children : <Navigate to="/login" />;
}
