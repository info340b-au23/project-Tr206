import React from 'react';
import './index.css';
import MainPage from './components/MainPage';
import Navigation from './components/Navigation';

function App(props) {
    return (
        <div>
          <Navigation />
          <MainPage />
        </div>
    );
}

export default App;
