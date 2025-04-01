// src/routes/product.routes.js
import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

/**
 * @route POST /api/products
 * @description Add a new product with image upload
 */
router.post('/', upload.single('productImage'), addProduct);

/**
 * @route GET /api/products
 * @description Get all products
 */
router.get('/', getAllProducts);

/**
 * @route GET /api/products/:id
 * @description Get a product by ID
 */
router.get('/:id', getProductById);

/**
 * @route PUT /api/products/:id
 * @description Update a product by ID
 */
router.put('/:id', upload.single('productImage'), updateProduct);

/**
 * @route DELETE /api/products/:id
 * @description Delete a product by ID
 */
router.delete('/:id', deleteProduct);

export default router;
