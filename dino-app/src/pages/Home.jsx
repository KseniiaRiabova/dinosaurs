import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <Link to="/map">
          <button>Map</button>
        </Link>
        <Link to="/dinos">
          <button>All About Dinosaurs</button>
        </Link>
        <Link to="/quiz">
          <button>Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
