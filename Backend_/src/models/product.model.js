// Import mongoose to define the schema and model
import mongoose from 'mongoose';

// Define the Product schema
const productSchema = new mongoose.Schema({
  // Name of the product (required and unique)
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Description of the product
  description: {
    type: String,
  },
  // Price of the product (required)
  price: {
    type: Number,
    required: true,
  },
  // Category of the product (e.g., books, puja items, etc.)
  category: {
    type: String,
    required: true,
  },
  // Stock quantity available
  stock: {
    type: Number,
    default: 0,
  },
  // URL of the product image
  imageUrl: {
    type: String,
  },
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
export default Product;
