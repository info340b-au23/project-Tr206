
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { BloodGlucoseChart } from './BloodGlucoseChart';
import { Navigation } from './Navigation';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1>Your Health Tracker</h1>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <p><a href="mailto:healthchecker@gmail.com">healthchecker@gmail.com</a></p>
        <p><a href="tel:555-123-4567">555-123-4567</a></p>
        <p>&copy; Diabetic Health Checker 2023</p>
      </div>
    </footer>
  );
}

export function HealthStats() {
  const [chartData, setChartData] = useState({
    bloodGlucose: [],
    systolicPressure: [],
    diastolicPressure: [],
    heartRate: [],
  });

  useEffect(() => {
    const db = getDatabase();
    const healthDataRef = ref(db, 'healthData');
    
    onValue(healthDataRef, (snapshot) => {
      const data = snapshot.val();


      const formattedData = {
        bloodGlucose: Object.values(data.bloodGlucose || {}).map(entry => ({
          x: new Date(entry.timestamp),
          y: entry.value
        })),
        systolicPressure: Object.values(data.systolicPressure || {}).map(entry => ({
          x: new Date(entry.timestamp),
          y: entry.value
        })),
        diastolicPressure: Object.values(data.diastolicPressure || {}).map(entry => ({
          x: new Date(entry.timestamp),
          y: entry.value
        })),
        heartRate: Object.values(data.heartRate || {}).map(entry => ({
          x: new Date(entry.timestamp),
          y: entry.value
        })),
      };

      setChartData(formattedData);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <BloodGlucoseChart chartData={chartData} />
      <PageFooter />
    </div>
  );
}
