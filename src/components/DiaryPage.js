import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { ref, push, getDatabase } from 'firebase/database';

export function DiaryPage() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentNote, setCurrentNote] = useState('');
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const navigate = useNavigate();

  // Handle the input field changes
  const handleDateChange = (event) => setCurrentDate(event.target.value);
  const handleNoteChange = (event) => setCurrentNote(event.target.value);
  const handleBloodGlucoseChange = (event) => setBloodGlucose(event.target.value);
  const handleSystolicPressureChange = (event) => setSystolicPressure(event.target.value);
  const handleDiastolicPressureChange = (event) => setDiastolicPressure(event.target.value);
  const handleHeartRateChange = (event) => setHeartRate(event.target.value);

  // Function to handle the submission of the health data
  const handleSaveHealthData = () => {
    const db = getDatabase();
    const healthDataRef = ref(db, 'healthData');

    // Convert date string to a proper timestamp
    const timeStamp = currentDate ? new Date(currentDate).toISOString() : '';

    // Construct the health data entry
    const healthDataEntry = {
      TimeStamp: timeStamp,
      bloodGlucose: parseFloat(bloodGlucose),
      systolicPressure: parseFloat(systolicPressure),
      diastolicPressure: parseFloat(diastolicPressure),
      heartRate: parseFloat(heartRate),
      note: currentNote
    };

    // Push the health data entry to Firebase
    push(healthDataRef, healthDataEntry)
      .then(() => {
        setCurrentNote('');
        setBloodGlucose('');
        setSystolicPressure('');
        setDiastolicPressure('');
        setHeartRate('');
        navigate('/healthstats');
      })
      .catch((error) => {
        console.error("Error writing to database", error);
      });
  };

  // JSX for the component
  return (
    <div>
      <Navigation />
      <div id="diary-header">
        <h2>Diary</h2>
      </div>
      <div>
        <h3 className="diary-description">Record your health notes and symptoms in the diary.</h3>
      </div>
      <div className="diary-entry">
        <label htmlFor="currentDate">Date:</label>
        <input type="date" id="currentDate" value={currentDate} onChange={handleDateChange} required />

        <label htmlFor="currentNote">Note:</label>
        <textarea id="currentNote" value={currentNote} onChange={handleNoteChange} />

        <label htmlFor="bloodGlucose">Blood Glucose (mmol/L):</label>
        <input type="number" id="bloodGlucose" value={bloodGlucose} onChange={handleBloodGlucoseChange} />

        <label htmlFor="systolicPressure">Systolic Pressure (mmHg):</label>
        <input type="number" id="systolicPressure" value={systolicPressure} onChange={handleSystolicPressureChange} />

        <label htmlFor="diastolicPressure">Diastolic Pressure (mmHg):</label>
        <input type="number" id="diastolicPressure" value={diastolicPressure} onChange={handleDiastolicPressureChange} />

        <label htmlFor="heartRate">Heart Rate (bpm):</label>
        <input type="number" id="heartRate" value={heartRate} onChange={handleHeartRateChange} />

        <button onClick={handleSaveHealthData}>Submit</button>
      </div>
      <footer className="fixed-bottom">
        <div className="container">
          <p><a href="mailto:healthchecker@gmail.com">healthchecker@gmail.com</a></p>
          <p><a href="tel:555-123-4567">555-123-4567</a></p>
          <p>&copy; Diabetic Health Checker 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default DiaryPage;
