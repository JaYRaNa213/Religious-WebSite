//  Home.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // ✅ Send GET request to /api/test
//     axios
//       .get('http://localhost:7000/api/test')
//       .then((response) => {
//         console.log('Response:', response.data);
//         setData(response.data.message); // Store the message in state
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Religious Website</h1>
//       <p>{data ? data : 'Loading...'}</p>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // ✅ Use environment variable
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/test`)
      .then((response) => {
        console.log('Response:', response.data);
        setData(response.data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Religious Website</h1>
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
};

export default Home;
