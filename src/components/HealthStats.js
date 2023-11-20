import React from 'react';
import { Navigation } from './Navigation';

export function HealthStats() {
    return (
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <h2>Health Stats</h2>
        <p>This is the Health Stats page. Display health-related statistics and tracking information.</p>
      </div>
    );
}