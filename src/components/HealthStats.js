import React from 'react';
import { Navigation } from './Navigation';
import { BloodGlucoseChart } from './BloodGlucoseChart';

function Header() {
  return (
    <header>
      <div className='container'>
        <h1>Your Health Tracker</h1>
      </div>
    </header>
  );
}

function PageFooter() {
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

export function HealthStats() {
  return (
    <div>
      <Navigation />
      <Header />
      <BloodGlucoseChart />
      <PageFooter />
    </div>
  );
}