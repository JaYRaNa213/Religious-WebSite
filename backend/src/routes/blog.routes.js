import express from 'express';
import { getAllBlogs, getBlogById, addBlog, updateBlog, deleteBlog } from '../controllers/blog.controller.js';

const router = express.Router();

// ✅ Get all blogs
router.get('/', getAllBlogs);

// ✅ Get blog by ID
router.get('/:id', getBlogById);

// ✅ Add a new blog
router.post('/', addBlog);

// ✅ Update blog by ID
router.put('/:id', updateBlog);

// ✅ Delete blog by ID
router.delete('/:id', deleteBlog);

export default router;
