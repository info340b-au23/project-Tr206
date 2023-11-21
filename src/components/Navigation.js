import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        { /* Nav Links */ }
        <li><Link to="/"><img src="img/home.png" alt="Home Icon" />Home</Link></li>
        <li><Link to="/HealthStats"><img src="img/quiz.png" alt="Quiz Icon" />Health Tracker</Link></li>
        <li><Link to="/FindLocation"><img src="img/location.png" alt="Location Icon" />Find a Location</Link></li>
        <li><Link to="/DiaryPage"><img src="img/diary.png" alt="Diary Icon" />Diary</Link></li>
        <li><Link to="/Profile"><img src="img/profile.png" alt="Profile Icon" />Profile</Link></li>
      </ul>
    </nav>
  );
}