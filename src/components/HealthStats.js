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
          x: new Date(entry.TimeStamp),
          y: entry.newBloodGlucoseValue
        })),
        systolicPressure: Object.values(data.systolicPressure || {}).map(entry => ({
          x: new Date(entry.TimeStamp),
          y: entry.newSystolicPressureValue
        })),
        diastolicPressure: Object.values(data.diastolicPressure || {}).map(entry => ({
          x: new Date(entry.TimeStamp),
          y: entry.newDiastolicPressureValue
        })),
        heartRate: Object.values(data.heartRate || {}).map(entry => ({
          x: new Date(entry.TimeStamp),
          y: entry.newHeartRateValue
        })),
      };
      setChartData(formattedData);
    });
  }, []);
  const clearChartData = () => {
    setChartData({
      bloodGlucose: [{ x: new Date(), y: null }],
      systolicPressure: [{ x: new Date(), y: null }],
      diastolicPressure: [{ x: new Date(), y: null }],
      heartRate: [{ x: new Date(), y: null }],
    });
  };
  

  return (
    <div>
      <Navigation />
      <Header />
      <button onClick={clearChartData} style={{ margin: '10px' }}>Clear Data Points</button>
      <BloodGlucoseChart chartData={chartData} />
      <PageFooter />
    </div>
  );
}
