// src/controllers/product.controller.js

// Mock database to store product data temporarily (replace with DB logic later)
let products = [];

// 📌 Create Product
export const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Validate required fields
    if (!name || !description || !price) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create a mock product object
    const product = {
      id: Date.now(),
      name,
      description,
      price,
      imageUrl: req.file ? req.file.path : 'No image uploaded',
    };

    // Add product to the array
    products.push(product);

    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 📌 Get All Products
export const getAllProducts = async (req, res) => {
  try {
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No products found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'All products retrieved successfully',
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 📌 Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((p) => p.id == id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 📌 Update Product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const productIndex = products.findIndex((p) => p.id == id);

    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // Update product data
    products[productIndex] = {
      ...products[productIndex],
      name: name || products[productIndex].name,
      description: description || products[productIndex].description,
      price: price || products[productIndex].price,
      imageUrl: req.file ? req.file.path : products[productIndex].imageUrl,
    };

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: products[productIndex],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 📌 Delete Product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id == id);

    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // Remove product from the array
    products.splice(productIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
