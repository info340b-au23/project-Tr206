import React from 'react';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';

export function Diary() {
    return (
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <h2>Diary</h2>
        <p>This is the Diary page. Add your diary entries, track your blood glucose levels, systolic and diastolic blood pressure, and other symptoms here.</p>
        <BloodGlucoseChart/>
      </div>
    );
  }