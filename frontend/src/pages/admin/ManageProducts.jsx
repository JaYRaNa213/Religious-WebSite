// src/pages/admin/ManageProducts.jsx
import React, { useState } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };

    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(
        "http://localhost:7000/api/v1/products",
        newProduct,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ManageProducts;
