// Import mongoose to define the schema and model
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User schema
const userSchema = new mongoose.Schema({
  // User's full name (required)
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // User's email address (required and unique)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // User's password (required and should be encrypted)
  password: {
    type: String,
    required: true,
  },
  // User's phone number (optional, but useful for payments)
  phone: {
    type: String,
    trim: true,
    default: '',
  },
  // Address of the user (optional)
  address: {
    type: String,
    trim: true,
    default: '',
  },
  // Profile image URL (optional)
  profileImage: {
    type: String,
    default: 'https://via.placeholder.com/150', // Default profile image
  },
  // User's role (can be 'user' or 'admin')
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  // Password reset token for forgot password functionality
  resetPasswordToken: {
    type: String,
    default: '',
  },
  resetPasswordExpires: {
    type: Date,
  },
  // Email verification token
  emailVerificationToken: {
    type: String,
    default: '',
  },
  // Whether the user has verified their email
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// 🔒 Pre-save middleware to hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // Hash the password with bcrypt
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 🔑 Method to compare hashed password for login
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
