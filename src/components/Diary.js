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
        <p>This is the Diary page. Add your diary entries, track your blood glucose levels, systolic and diastolic blood pressure, and other symptoms here.</p>
        <BloodGlucoseChart/>
      </div>
    );
  }