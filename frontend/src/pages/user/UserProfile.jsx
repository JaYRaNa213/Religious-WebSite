// frontendNew/src/pages/UserProfile.jsx
import React, { useState } from "react";
import { cloudinaryUpload } from "../../utils/cloudinaryUpload";

function UserProfile() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");
    try {
      const url = await cloudinaryUpload(image);
      setUploadedUrl(url); // Store the uploaded image URL
      console.log("Profile Image URL:", url); // Use this URL for the user profile
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data (name, email, and uploaded image URL) to backend
    const userProfileData = { name, email, profileImage: uploadedUrl };

    fetch("http://localhost:7000/api/v1/users/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfileData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated successfully!");
        console.log("Profile data:", data);
      })
      .catch((err) => console.error("Error submitting profile:", err));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Update Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
