import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, getDatabase, child, onValue, push, update } from 'firebase/database';
import { Navigation } from './Navigation';
import { firebaseApp } from '../index';

export function DiaryPage() {
  // const [currentDate, setCurrentDate] = useState('');
  const [currentNote, setCurrentNote] = useState('');
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [previousEntries, setPreviousEntries] = useState([]);
  const navigate = useNavigate();
  const [hour, setHour] = useState(''); 

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const notesRef = ref(db, 'notes');

    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const entries = Object.values(data);
        setPreviousEntries(entries);
      }
    });
  }, []);

  // const handleDateChange = (event) => setCurrentDate(event.target.value);
  const handleNoteChange = (event) => setCurrentNote(event.target.value);
  const handleHeartRateChange = (event) => setHeartRate(event.target.value);
  const handleBloodGlucoseChange = (event) => setBloodGlucose(event.target.value);
  const handleSystolicPressureChange = (event) => setSystolicPressure(event.target.value);
  const handleDiastolicPressureChange = (event) => setDiastolicPressure(event.target.value);
  const handleHourChange = (event) => setHour(event.target.value);

  const handleNavigateToHealthStats = () => {
    const db = getDatabase(firebaseApp);
    // const notesRef = ref(db, 'notes');
    // const indicatorsRef = ref(db, 'indicators');
    const timeStamp = new Date();
    timeStamp.setHours(hour, 0, 0, 0);

    // const noteEntry = {
    //   note: currentNote,
    //   date: currentDate,
    // };

    // const indicatorsEntry = {
    //   bloodGlucose,
    //   systolicPressure,
    //   diastolicPressure,
    //   heartRate,
    //   date: currentDate,
    // };

    const BG = {
        TimeStamp: timeStamp.toISOString(),
        newBloodGlucoseValue: parseFloat(bloodGlucose)
    }
     // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'healthData/bloodGlocose')).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/healthData/bloodGlucose/' + newPostKey] = BG;
    update(ref(db),updates)


    const SP = {
      TimeStamp: timeStamp.toISOString(),
      newSystolicPressureValue: parseFloat(systolicPressure)
    }
    // Get a key for a new Post.
    const newPostKey2 = push(child(ref(db), 'healthData/systolicPressure')).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates2 = {};
    updates2['/healthData/systolicPressure/' + newPostKey2] = SP;
    update(ref(db),updates2)


    const DP = {
      TimeStamp: timeStamp.toISOString(),
      newDiastolicPressureValue: parseFloat(diastolicPressure)
    }

    // Get a key for a new Post.
    const newPostKey3 = push(child(ref(db), 'healthData/diastolicPressure')).key;
    const updates3 = {};
    updates3['/healthData/diastolicPressure/' + newPostKey3] = DP;
    update(ref(db),updates3)

    // Write the new post's data simultaneously in the posts list and the user's post list.

    const HR = {
      TimeStamp: timeStamp.toISOString(),
      newHeartRateValue: parseFloat(heartRate)
    }
    // Get a key for a new Post.
    const newPostKey4 = push(child(ref(db), 'healthData/heartRate')).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates4 = {};
    updates4['/healthData/heartRate/' + newPostKey4] = HR;
    update(ref(db),updates4)
    
        .then(() => {
          setCurrentNote(''); // Clear the note field after saving
        })
        .then(() => {
            navigate('/healthstats', {
                state: {
                    bloodGlucose,
                    systolicPressure,
                    diastolicPressure,
                    heartRate,
                },
            });
        })
        .catch((error) => {
            console.error("Error writing to database", error);
        });
   };


  const renderDiaryEntry = () => {
    return (
      <div className="diary-entry">
        {/* <label htmlFor="currentDate">Select Today's Date:</label>
        <input type="date" id="currentDate" value={currentDate} onChange={handleDateChange} required /> */}
        <label htmlFor="hour">Hour of the Day (0-23.59):</label>
        <input type="number" id="hour" value={hour} min="0" max="23.59" onChange={handleHourChange} required/>

        <label htmlFor="currentNote">Describe your symptoms here:</label>
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

      </div>
    );
  };

  const renderPreviousEntries = () => {
    return (
      <div>
        <h3 className="previous-entries-header">Previous Entries</h3>
        <ul id="previousEntries">
          {previousEntries.map((entry, index) => {
            // Check if both date and note exist and are not empty strings
            if (entry.date && entry.note && entry.date.trim() !== '' && entry.note.trim() !== '') {
              return (
                <li key={index}>
                  <p>Date: {entry.date}</p>
                  <p>Entry: {entry.note}</p>
                </li>
              );
            }
            return null; // Skip rendering incomplete entries
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Navigation />
      <nav>
        <ul>
          <li><Link to="/"><img src="img/home.png" alt="Home Icon" />Home</Link></li>
          <li><Link to="/HealthStats"><img src="img/quiz.png" alt="Quiz Icon" />Health Tracker</Link></li>
          <li><Link to="/FindLocation"><img src="img/location.png" alt="Location Icon" />Find a Location</Link></li>
          <li><Link to="/DiaryPage"><img src="img/diary.png" alt="Diary Icon" />Diary</Link></li>
          <li><Link to="/Profile"><img src="img/profile.png" alt="Profile Icon" />Profile</Link></li>
        </ul>
      </nav>
      <div className='main'>
         <div id="diary-header">
        <img src="img/diary-icon.png" alt="Diary Icon" className="diary-img"/>
        <h2>Diary</h2>
      </div>
      <div>
        <h3 className="diary-description">Record your health notes and symptoms in the diary.</h3>
      </div>
      {renderDiaryEntry()}
      {renderPreviousEntries()}
      </div>
     
      <footer className="fixed-bottom">
        <div className="container">
          <p><a href="mailto:healthchecker@gmail.com"><span className="material-icons">email</span>healthchecker@gmail.com</a></p>
          <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
          <p>&copy; Diabetic Health Checker 2023</p>
        </div>
      </footer>
    </div>
  );
}

