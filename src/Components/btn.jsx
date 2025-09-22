import React, { useState, useEffect } from 'react';

function LoadingButton() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    if (loading) {
      // Simulate data fetch with 2-second delay
      const timer = setTimeout(() => {
        setData('Here is your data!');
        setLoading(false); // Stop loading
      }, 2000);

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleClick = () => {
    setData('');       // Clear previous data
    setLoading(true);  //
  };

  return (
    <div>
      <button onClick={handleClick}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      <p>{data}</p>
    </div>
  );
}

export default LoadingButton;
