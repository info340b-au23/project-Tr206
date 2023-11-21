import React from 'react';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';

export function Diary() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>Diary</h1>
      </div>
      </header>
        <Navigation /> {/* Include the Navigation component */}

        <h2>Diary</h2>
        <p>This is the Diary page. Add your diary entries, track your blood glucose levels, systolic and diastolic blood pressure, and other symptoms here. Also display graphs tracking these indexes.</p>
        <BloodGlucoseChart/>
      </div>
    );
  }