import React from 'react';

import { MainPage } from './MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
