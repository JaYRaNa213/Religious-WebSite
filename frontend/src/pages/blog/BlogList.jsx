import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import MainLayout from '../../layouts/MainLayout';
import { truncateText } from '../../assets/js/utils';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to load blogs.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <MainLayout>
      <div className="blog-list">
        <h1>Our Blogs</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && blogs.length === 0 && <p>No blogs available.</p>}

        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{truncateText(blog.content, 150)}</p>
            {/* Uncomment if you have a blog details page */}
            {/* <Link to={`/blogs/${blog._id}`}>Read More</Link> */}
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default BlogList;
