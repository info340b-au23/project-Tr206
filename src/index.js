import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { firebaseApp } from './firebase/FirebaseConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);