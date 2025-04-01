import axiosInstance from '../config/axiosConfig';

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching product list.';
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching product details.';
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/products', productData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error creating product.';
  }
};
