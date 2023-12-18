import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';
import { ref, onValue, getDatabase } from 'firebase/database';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1>Your Health Statistics</h1>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <p><a href="mailto:healthchecker@gmail.com"><span className="material-icons">email</span>healthchecker@gmail.com</a></p>
        <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
        <p>&copy; Diabetic Health Checker 2023</p>
      </div>
    </footer>
  );
}

export function HealthStats() {
  const [healthData, setHealthData] = useState({
    bloodGlucose: [],
    systolicPressure: [],
    diastolicPressure: [],
    heartRate: [],
  });

  useEffect(() => {
    const db = getDatabase();
    const healthDataRef = ref(db, 'healthData');

    const fetchData = () => {
      onValue(healthDataRef, (snapshot) => {
        const data = snapshot.val();
        const formattedData = {
          bloodGlucose: data.bloodGlucose ? [{ x: new Date(data.bloodGlucose.TimeStamp), y: data.bloodGlucose.newBloodGlucoseValue }] : [],
          systolicPressure: data.systolicPressure ? [{ x: new Date(data.systolicPressure.TimeStamp), y: data.systolicPressure.newSystolicPressureValue }] : [],
          diastolicPressure: data.diastolicPressure ? [{ x: new Date(data.diastolicPressure.TimeStamp), y: data.diastolicPressure.newDiastolicPressureValue }] : [],
          heartRate: data.heartRate ? [{ x: new Date(data.heartRate.TimeStamp), y: data.heartRate.newHeartRateValue }] : [],
        };
        setHealthData(formattedData);
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <BloodGlucoseChart healthData={healthData} />
      <Footer />
    </div>
  );
}
