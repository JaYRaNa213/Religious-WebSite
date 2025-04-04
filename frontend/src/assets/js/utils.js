// 📅 Format a date to a readable format (e.g., April 4, 2025)
export const formatDate = (dateString, locale = 'en-US', options = { year: 'numeric', month: 'long', day: 'numeric' }) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(locale, options);
};

// 🔠 Capitalize the first letter of a string
export const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// ✂️ Truncate a string to a specific length
export const truncateText = (text, maxLength) => {
  if (typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// 🔐 Generate a random unique ID using crypto (fallback to Math.random)
export const generateUniqueId = () => {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'id_' + Math.random().toString(36).substr(2, 9);
};

// 🧪 Check if an object is empty
export const isEmptyObject = (obj) => {
  return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
};
