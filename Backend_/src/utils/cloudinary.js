// cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * @description Uploads a file to Cloudinary and deletes the local file after upload
 * @param {string} localFilePath - Path to the file stored temporarily on the server
 * @returns {Object|null} - Cloudinary upload response or null if upload fails
 */
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error('No file path provided');
    }

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto', // Auto-detect file type
    });

    // Delete the file from local storage after successful upload
    fs.unlinkSync(localFilePath);

    // Return the response with Cloudinary file URL
    return response;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error.message);

    // Remove the file if upload failed
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
