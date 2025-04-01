// Validate Email
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
  return emailRegex.test(email);
};

// Validate Password (Minimum 6 characters)
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validate Required Fields
export const validateRequired = (value) => {
  return value && value.trim() !== '';
};

// Form Validation Wrapper
export const validateForm = (formData, requiredFields) => {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!validateRequired(formData[field])) {
      errors[field] = `${field} is required.`;
    }
  });

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Invalid email format.';
  }

  if (formData.password && !validatePassword(formData.password)) {
    errors.password = 'Password must be at least 6 characters.';
  }

  return errors;
};
