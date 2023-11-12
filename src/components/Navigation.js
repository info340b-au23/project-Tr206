import React from 'react';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="symptom-1.html"><img src="img/quiz.png" alt="Quiz Icon" />Symptom Quiz</a></li>
        <li><a href="hospital.html"><img src="img/location.png" alt="Location Icon" />Find a Treatment Center Near you</a></li>
        <li><a href="#diary"><img src="img/diary.png" alt="Diary Icon" />Diary</a></li>
        <li><a href="#profile"><img src="img/profile.png" alt="Profile Icon" />Profile</a></li>
      </ul>
    </nav>
  );
};