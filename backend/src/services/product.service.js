// Import models
import Product from '../models/product.model.js';

/**
 * @description Service to get all products
 * @returns {Array} - List of all products
 */
const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

/**
 * @description Service to get a product by ID
 * @param {String} productId - Product ID
 * @returns {Object} - Product details
 */
const getProductById = async (productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

/**
 * @description Service to add a new product
 * @param {Object} productData - Product details
 * @returns {Object} - Created product
 */
const addProduct = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

/**
 * @description Service to update a product
 * @param {String} productId - Product ID
 * @param {Object} productData - Updated product details
 * @returns {Object} - Updated product
 */
const updateProduct = async (productId, productData) => {
  const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });

  if (!updatedProduct) {
    throw new Error('Product not found or could not be updated');
  }

  return updatedProduct;
};

/**
 * @description Service to delete a product
 * @param {String} productId - Product ID
 * @returns {String} - Confirmation message
 */
const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw new Error('Product not found or already deleted');
  }

  return 'Product deleted successfully!';
};

// Export product services
export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
