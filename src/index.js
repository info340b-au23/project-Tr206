import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { initializeApp } from 'firebase/app';
import { ref, getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAczDz776OKPO4GHBDue2GZ_CtIBeMKOt8",
  authDomain: "diabetic-health-tracker.firebaseapp.com",
  databaseURL: "https://diabetic-health-tracker-default-rtdb.firebaseio.com",
  projectId: "diabetic-health-tracker",
  storageBucket: "diabetic-health-tracker.appspot.com",
  messagingSenderId: "877298090758",
  appId: "1:877298090758:web:5cc58ca9c1f74e52601487",
  measurementId: "G-6XFFM65BXR"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);


const healthDataRef = ref(db, 'healthData')

export { db, healthDataRef, firebaseApp };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);