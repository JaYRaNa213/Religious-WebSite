// cloudinaryUpload.js
export const cloudinaryUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset"); // ✅ Update this to match your Cloudinary preset

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url;
};
