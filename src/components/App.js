import React from 'react';
import './index.css';
import HomePage from './HomePage';
import Navigation from './Navigation';

function App(props) {
    return (
        <div>
          <Navigation />
          <HomePage />
        </div>
    );
}

export default App;
