import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage';
import { Profile } from './Profile';
import { Diary } from './Diary';
import { FindLocation } from './FindLocation';
import { HealthStats } from './HealthStats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/findlocation" element={<FindLocation />} /> {/* Route for FindLocation */}
          <Route path="/healthstats" element={<HealthStats />} /> {/* Route for HealthStats */}
          {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
