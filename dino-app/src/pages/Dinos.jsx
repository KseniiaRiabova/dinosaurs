import React from 'react';
import useFetch from '../components/useFetch'; // Using fetch from components folder

function Dinos() {
  const { data, error, isLoading } = useFetch(
    'https://chinguapi-production.up.railway.app/dinosaurs/' // Fetching dinosaurs from the API on railroads, to dont raise traffic on different API
  );

  if (isLoading) {
    return <div>Loading...</div>; // Loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Rendering error message if fetching falls
  }

  return (
    <div>
      <h1>Dinos Page</h1>
      {/* Here goes the data */}
      <ul>
        {data.map((dino) => (
          <li key={dino.id}>{dino.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dinos;
