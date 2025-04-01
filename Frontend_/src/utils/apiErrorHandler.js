// Handle API Errors
const apiErrorHandler = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('Error Response:', error.response.data.message);
    return error.response.data.message || 'Server error occurred.';
  } else if (error.request) {
    // No response from the server
    console.error('No Response:', error.request);
    return 'No response received from server.';
  } else {
    // Something went wrong setting up the request
    console.error('Request Error:', error.message);
    return error.message || 'Request error occurred.';
  }
};

export default apiErrorHandler;
