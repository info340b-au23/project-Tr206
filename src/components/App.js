import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage';
import { Profile } from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
