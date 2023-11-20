import React from 'react';
import { Navigation } from './Navigation';

export function Diary() {
    return (
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <h2>Diary</h2>
        <p>This is the Diary page. Add your diary entries, track your blood glucose levels, systolic and diastolic blood pressure, and other symptoms here.</p>
      </div>
    );
  }