// src/pages/AddLiveVideo.jsx
import React, { useState } from "react";

const AddLiveVideo = () => {
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:7000/api/v1/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link: videoLink }),
    })
      .then((res) => res.json())
      .then((data) => alert("Live video added"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Live Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button type="submit">Add Video Link</button>
    </form>
  );
};

export default AddLiveVideo;
