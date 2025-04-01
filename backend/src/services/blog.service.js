// Import the Blog model
import Blog from '../models/blog.model.js';

// Service to get all blogs
/**
 * @returns {Array} - List of all blogs
 */
const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

// Service to get a blog by ID
/**
 * @param {String} blogId - Blog ID
 * @returns {Object} - Blog details
 */
const getBlogById = async (blogId) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new Error('Blog not found');
  }
  return blog;
};

// Service to add a new blog
/**
 * @param {Object} blogData - Blog details
 * @returns {Object} - Created blog
 */
const addBlog = async (blogData) => {
  const newBlog = await Blog.create(blogData);
  return newBlog;
};

// Service to update a blog
/**
 * @param {String} blogId - Blog ID
 * @param {Object} blogData - Updated blog details
 * @returns {Object} - Updated blog
 */
const updateBlog = async (blogId, blogData) => {
  const updatedBlog = await Blog.findByIdAndUpdate(blogId, blogData, { new: true, runValidators: true });
  if (!updatedBlog) {
    throw new Error('Blog not found or could not be updated');
  }
  return updatedBlog;
};

// Service to delete a blog
/**
 * @param {String} blogId - Blog ID
 * @returns {String} - Confirmation message
 */
const deleteBlog = async (blogId) => {
  const deletedBlog = await Blog.findByIdAndDelete(blogId);
  if (!deletedBlog) {
    throw new Error('Blog not found or already deleted');
  }
  return 'Blog deleted successfully!';
};

// Export all blog services
export { getAllBlogs, getBlogById, addBlog, updateBlog, deleteBlog };
