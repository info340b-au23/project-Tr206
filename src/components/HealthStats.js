import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import BloodGlucoseChart from './BloodGlucoseChart';
import { healthDataRef } from '../firebase/FirebaseConfig';
import { onValue, ref, push } from 'firebase/database';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1>Your Health Tracker</h1>
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
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataRef = ref(healthDataRef, 'healthData');
    const newHealthData = {
      bloodGlucose: parseInt(bloodGlucose),
      systolicPressure: parseInt(systolicPressure),
      diastolicPressure: parseInt(diastolicPressure),
      heartRate: parseInt(heartRate),
      timestamp: Date.now(),
    };

    // Push new health data to Firebase
    push(dataRef, newHealthData);

    // Update the chart or perform any other actions based on the new data
    // You can choose to update the existing data or set it to a new state, similar to what was done in useEffect
  };

  return (
    <div>
      <Navigation />
      <Header />

      <form onSubmit={handleSubmit}>
        {/* Input fields for capturing health data */}
        <label>
          Blood Glucose:
          <input
            type="number"
            value={bloodGlucose}
            onChange={(e) => setBloodGlucose(e.target.value)}
          />
        </label>
        {/* Similar input fields for systolicPressure, diastolicPressure, and heartRate */}
        <button type="submit">Submit</button>
      </form>

      {/* Display existing chart based on fetched healthData */}
      <BloodGlucoseChart healthData={healthData} />
      <Footer />
    </div>
  );
}