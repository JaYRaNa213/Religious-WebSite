// Import required modules
import fs from 'fs';
import path from 'path';

// Root directory of the frontend
const ROOT_DIR = './';

// Define folder and file structure
const structure = {
  'public': {
    'images': {
      'logo.png': '',
    },
    'favicon.ico': '',
  },
  'src': {
    'api': {
      'authAPI.js': '',
      'blogAPI.js': '',
      'bookingAPI.js': '',
      'emailAPI.js': '',
      'paymentAPI.js': '',
      'productAPI.js': '',
    },
    'assets': {
      'css': {
        'styles.css': '',
      },
      'js': {
        'utils.js': '',
      },
    },
    'components': {
      'Footer.jsx': '',
      'Header.jsx': '',
      'Loader.jsx': '',
      'Navbar.jsx': '',
    },
    'config': {
      'axiosConfig.js': `
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
`,
    },
    'context': {
      'AuthContext.js': `
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
`,
    },
    'layouts': {
      'AdminLayout.jsx': '',
      'MainLayout.jsx': '',
    },
    'pages': {
      'auth': {
        'Login.jsx': '',
        'Register.jsx': '',
      },
      'blog': {
        'BlogList.jsx': '',
      },
      'booking': {
        'BookingForm.jsx': '',
      },
      'payments': {
        'PaymentSuccess.jsx': '',
      },
      'About.jsx': '',
      'Contact.jsx': '',
      'Home.jsx': '',
      'NotFound.jsx': '',
    },
    'routes': {
      'AppRoutes.jsx': '',
    },
    'services': {
      'authService.js': '',
      'blogService.js': '',
      'bookingService.js': '',
      'emailService.js': '',
      'paymentService.js': '',
      'productService.js': '',
    },
    'store': {
      'actions.js': '',
      'reducers.js': '',
    },
    'utils': {
      'apiErrorHandler.js': '',
      'constants.js': '',
      'formValidation.js': '',
    },
    'App.js': '',
    'server.js': '',
  },
  '.vscode': {
    'settings.json': `
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true
}
`,
  },
  '.env': '',
  '.gitignore': `
node_modules/
dist/
.vscode/
.env
`,
  'package.json': `
{
  "name": "religious-frontend",
  "version": "1.0.0",
  "description": "Frontend for religious website",
  "type": "module",
  "main": "src/server.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "axios": "^1.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2"
  }
}
`,
  'README.md': `
# Religious Website Frontend
This is the frontend of the Religious Website. It uses React.js / Next.js.

## 📚 Tech Stack
- React / Next.js
- Tailwind CSS / Bootstrap
- Axios for HTTP requests
- Redux / Context API for state management

## 🚀 How to Run
1. Install dependencies:
\`\`\`
npm install
\`\`\`
2. Run development server:
\`\`\`
npm run dev
\`\`\`
3. Open [http://localhost:3000](http://localhost:3000)
`,
};

// Create folders and files recursively
const createStructure = (base, structure) => {
  for (const name in structure) {
    const filePath = path.join(base, name);
    if (typeof structure[name] === 'object') {
      // Create folder
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
      }
      createStructure(filePath, structure[name]);
    } else {
      // Create file with content
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, structure[name]);
      }
    }
  }
};

// Create the entire frontend structure
if (!fs.existsSync(ROOT_DIR)) {
  fs.mkdirSync(ROOT_DIR);
}
createStructure(ROOT_DIR, structure);

console.log('✅ Frontend project structure created successfully!');
