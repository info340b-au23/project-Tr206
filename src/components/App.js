import React from 'react';
<<<<<<< HEAD


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage';
import { Profile } from './Profile';
import { DiaryPage } from './DiaryPage';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { Profile } from './Profile';
import { Diary } from './Diary';
import { FindLocation } from './FindLocation';
import { HealthStats } from './HealthStats';
import BloodGlucoseChart from './BloodGlucoseChart';
>>>>>>> 7de61c1cdc3b1d4b1930c32a5ca819086428140d

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
        <Route path="/DiaryPage" element={<DiaryPage/>}/>
=======
        <Route path="/diary" element={<Diary />} />
        <Route path="/findlocation" element={<FindLocation />} /> {/* Route for FindLocation */}
        <Route path="/healthstats" element={<HealthStats />} /> {/* Route for HealthStats */}
        <Route path="/bloodglucosechart" element={<BloodGlucoseChart />} /> {/* Route for HealthStats */}
>>>>>>> 7de61c1cdc3b1d4b1930c32a5ca819086428140d
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;