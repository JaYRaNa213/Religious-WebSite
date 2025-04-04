import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/test`)
      .then((response) => {
        setData(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Welcome to the Religious Website</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <p>{data}</p>}
    </div>
  );
};

export default Home;
