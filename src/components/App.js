import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-vis/dist/style.css';
import { MainPage } from './MainPage';
import { Profile } from './Profile';
import { DiaryPage } from './DiaryPage';
import { FindLocation } from './FindLocation';
import { HealthStats } from './HealthStats';
import BloodGlucoseChart from './BloodGlucoseChart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diarypage" element={<DiaryPage />} />
        <Route path="/findlocation" element={<FindLocation />} /> {/* Route for FindLocation */}
        <Route path="/healthstats" element={<HealthStats />} /> {/* Route for HealthStats */}
        <Route path="/bloodglucosechart" element={<BloodGlucoseChart />} /> Route for HealthStats
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;