import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';

export function HealthStats() {
  const location = useLocation();
  const { bloodGlucose, systolicPressure, diastolicPressure, heartRate } = location.state || {};

  return (
    <div>
      <Navigation />
      <h2>Health Stats</h2>
      {/* received graph */}
      <BloodGlucoseChart
        bloodGlucose={bloodGlucose}
        systolicPressure={systolicPressure}
        diastolicPressure={diastolicPressure}
        heartRate={heartRate}
      />
    </div>
  );
}
