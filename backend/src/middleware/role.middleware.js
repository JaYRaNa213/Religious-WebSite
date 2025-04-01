// Middleware to check user role for authorization
export const checkRole = (roles) => {
  return (req, res, next) => {
    try {
      // Check if user is authenticated and has a role
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions!' });
      }

      // Move to the next middleware or route
      next();
    } catch (error) {
      res.status(500).json({ message: 'Error checking user role', error: error.message });
    }
  };
};
