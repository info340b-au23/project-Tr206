import React from 'react';
import { Link } from 'react-router-dom';



export function DiaryPage() {
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
          <li><a href="symptom-1.html"><img src="img/quiz.png" alt="Quiz Icon"/>Symptom Quiz</a></li>
          <li><a href="hospital.html"><img src="img/location.png" alt="Location Icon"/>Find a Treatment Center Near You</a></li>
          <li><a href="#diary" className="active"><img src="img/diary.png" alt="Diary Icon"/>Diary</a></li>
          <li><a href="#profile"><img src="img/profile.png" alt="Profile Icon"/>Profile</a></li>
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

  // function renderDiaryEntry() {
  //   return (
  //     <div className="diary-entry">
  //       <label htmlFor="currentDate">Select Today's Date:</label>
  //       <input type="date" id="currentDate" value={currentDate} onChange={handleDateChange} required/>
  
  //       <label htmlFor="currentNote">Today's Note:</label>
  //       <textarea rows="4" cols="50" id="currentNote" value={currentNote} onChange={handleNoteChange}></textarea>
  
  //       <label htmlFor="bloodGlucose">Blood Glucose Level (mg/dL):</label>
  //       <input type="number" id="bloodGlucose" value={bloodGlucose} onChange={handleBloodGlucoseChange} required/>
  
  //       <label htmlFor="systolicPressure">Systolic Blood Pressure (mmHg):</label>
  //       <input type="number" id="systolicPressure" value={systolicPressure} onChange={handleSystolicPressureChange} required/>
  
  //       <label htmlFor="diastolicPressure">Diastolic Blood Pressure (mmHg):</label>
  //       <input type="number" id="diastolicPressure" value={diastolicPressure} onChange={handleDiastolicPressureChange} required/>
  
  //       <button onClick={handleSaveNote}>Save Note</button>
  //     </div>
  //   );
  // }
  
  

  // function renderPreviousEntries() {
  //   return (
  //     <div>
  //       <h3 className="previous-entries-header">Previous Entries</h3>
  //       <ul id="previousEntries">
  //         {previousEntries.map((entry, index) => (
  //           <li key={index}>{entry}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  

  return (
    <div>
      {renderNav()}
      {renderDiaryHeader()}
      {renderDiaryDescription()}
      {/* {renderDiaryEntry()}
      {renderPreviousEntries()} */}
      {Footer()}
    </div>
  );
};


