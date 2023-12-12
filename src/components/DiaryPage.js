import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, getDatabase, push as firebasePush, onValue } from 'firebase/database';
import { Navigation } from './Navigation';
import { firebaseApp } from '../index';

export function DiaryPage() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentNote, setCurrentNote] = useState('');
  const [previousEntries, setPreviousEntries] = useState([]);
  const navigate = useNavigate();

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

  const handleDateChange = (event) => setCurrentDate(event.target.value);
  const handleNoteChange = (event) => setCurrentNote(event.target.value);

  const handleSaveEntry = () => {
    const db = getDatabase(firebaseApp);
    const notesRef = ref(db, 'notes');

    const noteEntry = {
      note: currentNote,
      date: currentDate,
    };

    firebasePush(notesRef, noteEntry)
      .then(() => {
        setCurrentNote(''); // Clear the note field after saving
      })
      .catch((error) => {
        console.error('Error writing to database', error);
      });
  };

  const handleGoToHealthStats = () => {
    navigate('/healthstats');
  };

  const renderDiaryEntry = () => {
    return (
      <div className="diary-entry">
        <label htmlFor="currentDate">Select Today's Date:</label>
        <input type="date" id="currentDate" value={currentDate} onChange={handleDateChange} required />

        <label htmlFor="currentNote">Describe your symptoms here:</label>
        <textarea rows="4" cols="50" id="currentNote" value={currentNote} onChange={handleNoteChange}></textarea>
        
        <button onClick={handleSaveEntry} aria-label="Save Entry">
        Save Entry
        </button>
        <button onClick={handleGoToHealthStats} aria-label="Go to Health Stats">
        Go to Health Stats
        </button>
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
      <div id="diary-header">
        <img src="img/diary-icon.png" alt="Diary Icon" className="diary-img"/>
        <h2>Diary</h2>
      </div>
      <div>
        <h3 className="diary-description">Record your health notes and symptoms in the diary.</h3>
      </div>
      {renderDiaryEntry()}
      {renderPreviousEntries()}
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


