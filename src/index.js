import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { initializeApp } from 'firebase/app';
import { ref, getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: '',
  authDomain: 'https://diabetic-health-tracker.firebaseapp.com',
  projectId: 'diabetic-health-tracker',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementID: ''
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
