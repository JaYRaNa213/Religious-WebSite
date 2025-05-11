import React, { useState } from "react";
import { cloudinaryUpload } from "../../utils/cloudinaryUpload";

function AddBlogPost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");
    try {
      const url = await cloudinaryUpload(image);
      setUploadedUrl(url);
      console.log("Blog Image URL:", url); // Use this URL for the blog post
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = { title, content, imageUrl: uploadedUrl };

    fetch("http://localhost:7000/api/v1/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Blog post added successfully!");
        console.log("Blog post data:", data);
      })
      .catch((err) => console.error("Error adding blog post:", err));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Add Blog Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input type="file" onChange={handleImageChange} className="mb-2" />
        <button
          type="button"
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Upload Image
        </button>

        {uploadedUrl && (
          <div className="mt-4">
            <p>Uploaded Image:</p>
            <img src={uploadedUrl} alt="Uploaded" className="w-64" />
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-4"
        >
          Add Blog Post
        </button>
      </form>
    </div>
  );
}

export default AddBlogPost;
