import React, { useState } from "react";
import { cloudinaryUpload } from "../../utils/cloudinaryUpload";

function AddProduct() {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image to upload.");
    try {
      const url = await cloudinaryUpload(image);
      setUploadedUrl(url);
      console.log("Product Image URL:", url); // Use this URL in the product creation form
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send product info along with the uploaded image URL to backend API
    const productData = { name: productName, price, imageUrl: uploadedUrl };

    fetch("http://localhost:7000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added successfully!");
        console.log("Product data:", data);
      })
      .catch((err) => console.error("Error submitting product:", err));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
