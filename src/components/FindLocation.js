import React from 'react';
import { Navigation } from './Navigation';

export function FindLocation() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Find Care Near You</h1>
        </div>
      </header>
      <Navigation /> {/* Include the Navigation component */}
      <div className="left-container">
        <p> This page will display information related to finding treatment centers or locations.</p>
      </div>
    </div>
  );
}