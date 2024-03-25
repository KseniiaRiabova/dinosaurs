import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Map from './pages/Map.jsx';
import Quiz from './pages/Quiz.jsx';
import Dinos from './pages/Dinos.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dinos" element={<Dinos />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
