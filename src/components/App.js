
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { Profile } from './Profile';
import BloodGlucoseChart from './BloodGlucoseChart'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blood-glucose" element={<BloodGlucoseChart />} /> 
        {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
