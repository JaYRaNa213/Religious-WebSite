import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Mock database for demo purposes
const users = [];

// ========================
// ✅ Register User Logic
// ========================
export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate unique userId
  const userId = Date.now().toString(); // ✅ Corrected userId generation

  // Create new user and push to mock DB
  const newUser = { userId, name, email, password: hashedPassword };
  users.push(newUser);

  console.log('✅ New User Registered:', newUser);
  return newUser;
};

// ========================
// ✅ Login User Logic
// ========================
export const loginUser = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token with userId
  const token = jwt.sign(
    { id: user.userId.toString(), email: user.email }, // ✅ Corrected to user.userId
    process.env.ACCESS_TOKEN_SECRET, // ✅ Use correct token secret
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1d',
    }
  );

  console.log('✅ User Logged In, Token Generated:', token);
  return token;
};

// ========================
// ✅ Logout User Logic
// ========================
export const logoutUser = async () => {
  return 'User logged out successfully';
};

// ========================
// ✅ Get User Profile Logic
// ========================
export const getUserProfile = async (userId) => {
  const user = users.find((user) => user.userId.toString() === userId); // ✅ Fixed to check userId properly
  if (!user) {
    throw new Error('User not found');
  }

  // Return user profile without the password
  const { password, ...userWithoutPassword } = user;
  console.log('✅ User Profile Fetched:', userWithoutPassword);
  return userWithoutPassword;
};
// ========================
// ✅ Get All Users Logic
// ========================
export const getAllUsers = async () => {
  if (users.length === 0) {
    throw new Error('No users found');
  }
  console.log('✅ All Users Fetched:', users);
  return users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
};
