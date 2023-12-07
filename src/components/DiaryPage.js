import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';



export function DiaryPage() {

  const [currentDate, setCurrentDate] = useState('');
  const [currentNote, setCurrentNote] = useState('');
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [previousEntries, setPreviousEntries] = useState([]);

  const navigate = useNavigate();
  
  const handleHeartRateChange = (event) => setHeartRate(event.target.value);
  const handleDateChange = (event) => setCurrentDate(event.target.value);
  const handleNoteChange = (event) => setCurrentNote(event.target.value);
  const handleBloodGlucoseChange = (event) => setBloodGlucose(event.target.value);
  const handleSystolicPressureChange = (event) => setSystolicPressure(event.target.value);
  const handleDiastolicPressureChange = (event) => setDiastolicPressure(event.target.value);

  const handleNavigateToHealthStats = () => {
    // Navigate to HealthStats with data
    navigate('/healthstats', {
      state: {
        bloodGlucose,
        systolicPressure,
        diastolicPressure,
        heartRate,
      },
    });
  };
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

  function renderNav() {
    return (
      <nav>
        <ul>
        <li><Link to="/"><img src="img/home.png" alt="Home Icon" />Home</Link></li>
        <li><Link to="/HealthStats"><img src="img/quiz.png" alt="Quiz Icon" />Health Tracker</Link></li>
        <li><Link to="/FindLocation"><img src="img/location.png" alt="Location Icon" />Find a Location</Link></li>
        <li><Link to="/DiaryPage"><img src="img/diary.png" alt="Diary Icon" />Diary</Link></li>
        <li><Link to="/Profile"><img src="img/profile.png" alt="Profile Icon" />Profile</Link></li>
        </ul>
      </nav>
    );
  }
  function renderDiaryHeader() {
    return (
      <div id="diary-header">
        <img src="img/diary-icon.png" alt="Diary Icon" className="diary-img"/>
        <h2>Diary</h2>
      </div>
    );
  }

  function renderDiaryDescription() {
    return (
      <div>
        <h3 className="diary-description">Record your health notes and symptoms in the diary.</h3>
      </div>
    );
  }

function renderDiaryEntry() {
  return (
    <div className="diary-entry">
      <label htmlFor="currentDate">Select Today's Date:</label>
      <input type="date" id="currentDate" value={currentDate} onChange={handleDateChange} required/>

      <label htmlFor="currentNote">Today's Note:</label>
      <textarea rows="4" cols="50" id="currentNote" value={currentNote} onChange={handleNoteChange}></textarea>

      <label htmlFor="bloodGlucose">Blood Glucose Level (mmol/h):</label>
      <input type="number" id="bloodGlucose" value={bloodGlucose} onChange={handleBloodGlucoseChange} required/>

      <label htmlFor="systolicPressure">Systolic Blood Pressure (mmHg):</label>
      <input type="number" id="systolicPressure" value={systolicPressure} onChange={handleSystolicPressureChange} required/>

      <label htmlFor="diastolicPressure">Diastolic Blood Pressure (mmHg):</label>
      <input type="number" id="diastolicPressure" value={diastolicPressure} onChange={handleDiastolicPressureChange} required/>

      <label htmlFor="heartRate">Heart Rate (BPM):</label>
      <input type="number" id="heartRate" value={heartRate} onChange={handleHeartRateChange} required/>

      <button onClick={handleNavigateToHealthStats}>Go to Health Stats</button>

      {/* <button onClick={handleSaveNote}>Save Note</button> */}
    </div>
  );
}


  function renderPreviousEntries() {
    return (
      <div>
        <h3 className="previous-entries-header">Previous Entries</h3>
        <ul id="previousEntries">
          {previousEntries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
  

  return (
    <div>
      <Navigation /> {/* Include the Navigation component */}
      {renderNav()}
      {renderDiaryHeader()}
      {renderDiaryDescription()}
      {renderDiaryEntry()}
      {renderPreviousEntries()}
      {/* <BloodGlucoseChart
        bloodGlucose={bloodGlucose}
        systolicPressure={systolicPressure}
        diastolicPressure={diastolicPressure}
        heartRate={heartRate}
      /> */}
      {Footer()}
    </div>
  );
};



