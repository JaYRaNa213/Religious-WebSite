import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../api/productAPI';

// Get All Products
export const fetchAllProducts = async () => {
  try {
    return await getAllProducts();
  } catch (error) {
    throw error || 'Failed to fetch products.';
  }
};

// Get Product by ID
export const fetchProductById = async (id) => {
  try {
    return await getProductById(id);
  } catch (error) {
    throw error || 'Error fetching product.';
  }
};

// Create New Product
export const createNewProduct = async (productData) => {
  try {
    return await createProduct(productData);
  } catch (error) {
    throw error || 'Error creating product.';
  }
};

// Update Product
export const updateExistingProduct = async (id, updatedData) => {
  try {
    return await updateProduct(id, updatedData);
  } catch (error) {
    throw error || 'Error updating product.';
  }
};

// Delete Product
export const deleteProductById = async (id) => {
  try {
    return await deleteProduct(id);
  } catch (error) {
    throw error || 'Error deleting product.';
  }
};
