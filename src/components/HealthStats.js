import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';
import { healthDataRef, firebaseApp } from '../index';
import { onValue } from 'firebase/database';

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
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    const dataRef = healthDataRef;

    const fetchData = () => {
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map((timestamp) => ({
          x: new Date(parseInt(timestamp, 10)),
          y: data[timestamp].bloodGlucose,
        }));
        setHealthData(formattedData);
      });

      // Clean up the event listener to avoid memory leaks
      return () => unsubscribe();
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

