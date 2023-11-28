import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    if (data) {
        console.log("data fetched: ", data)
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/allschool');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div>
      <h1>React Frontend</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default FetchData;