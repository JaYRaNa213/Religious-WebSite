// // Middleware to handle 404 errors
// export const notFound = (req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: "Resource not found!",
//   });
// };

// // Import ApiError class for handling API errors
// import ApiError from "../utils/ApiError.js";







// export const errorHandler = (err, req, res, next) => {
  
//   let statusCode = err.statusCode || 500;
//   let message = err.message || "Internal Server Error";
//   if (err instanceof ApiError) {
//     return res.status(statusCode).json({
//       success: false,
//       message,
//       errors: err.errors || [],
//     });
//   }


//   console.error(err.stack);

  
//   res.status(statusCode).json({
//     success: false,
//     message,
//     errors: err.errors || [],
//     stack: process.env.NODE_ENV === "development" ? err.stack : null,
//   });
// };
