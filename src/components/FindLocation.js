import React from 'react';
import { Navigation } from './Navigation';

export function FindLocation() {
    return (
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <h2>Find Location</h2>
        <p>This is the Find Location page. Display information related to finding treatment centers or locations.</p>
      </div>
    );
}