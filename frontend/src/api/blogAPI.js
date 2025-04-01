import axiosInstance from '../config/axiosConfig';

// Fetch all blog posts
export const getAllBlogs = async () => {
  try {
    const response = await axiosInstance.get('/blogs');
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching blog posts.';
  }
};

// Fetch a single blog by ID
export const getBlogById = async (id) => {
  try {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching blog details.';
  }
};

// Create a new blog post
export const createBlog = async (blogData) => {
  try {
    const response = await axiosInstance.post('/blogs', blogData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error creating blog post.';
  }
};
