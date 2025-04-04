// blog/BlogList.jsx

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import MainLayout from '../../layouts/MainLayout';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axiosInstance.get('/blogs');
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <MainLayout>
      <div className="blog-list">
        <h1>Our Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 150)}...</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default BlogList;
