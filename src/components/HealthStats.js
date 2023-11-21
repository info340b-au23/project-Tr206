import React from 'react';
import { Navigation } from './Navigation';

export function HealthStats() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Health Tracker</h1>
        </div>
      </header>
      <Navigation /> {/* Include the Navigation component */}
      <div className="left-container">
        <p> This is the Health Tracker Page which will show charts related to the metrics inputted.</p>
      </div>
    </div>
  );
}