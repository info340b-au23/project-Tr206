import React from 'react';
import { MainPage } from './MainPage';
import { Navigation } from './Navigation';

function App(props) {
    return (
        <div>
          <Navigation />
          <MainPage />
        </div>
    );
}

export default App;
