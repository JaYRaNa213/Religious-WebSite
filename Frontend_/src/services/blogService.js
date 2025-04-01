import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../api/blogAPI';

// Get All Blogs
export const fetchAllBlogs = async () => {
  try {
    return await getAllBlogs();
  } catch (error) {
    throw error || 'Failed to fetch blogs.';
  }
};

// Get Blog by ID
export const fetchBlogById = async (id) => {
  try {
    return await getBlogById(id);
  } catch (error) {
    throw error || 'Error fetching blog.';
  }
};

// Create New Blog
export const createNewBlog = async (blogData) => {
  try {
    return await createBlog(blogData);
  } catch (error) {
    throw error || 'Error creating blog.';
  }
};

// Update Blog
export const updateExistingBlog = async (id, updatedData) => {
  try {
    return await updateBlog(id, updatedData);
  } catch (error) {
    throw error || 'Error updating blog.';
  }
};

// Delete Blog
export const deleteBlogById = async (id) => {
  try {
    return await deleteBlog(id);
  } catch (error) {
    throw error || 'Error deleting blog.';
  }
};
