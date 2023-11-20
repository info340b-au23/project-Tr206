import React from 'react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

function AdditionalInfo() {
  return (
    <div className="container diabetes-info">
      <div className="row">
        <div className="col">
          <h2>More About Diabetes Health Checker</h2>
          <div className="info-wrapper">
            <p>
              Welcome to the Diabetes Health Checker, your comprehensive platform for managing diabetes. Here's what our platform offers:
            </p>
            <ul>
              <li>A central Main Page for easy navigation and access to essential information.</li>
              <li>A Diary section enabling note-taking, tracking blood glucose levels, systolic and diastolic blood pressure, other symptoms, and visual representations through charts.</li>
              <li>Find Treatment Center feature for locating centers, interactive health stats using specialized libraries, and graphical representations of health metrics.</li>
              <li>Profile management allowing users to input email, phone number, and password for a personalized experience and immediate access to the Biomarket Tracker.</li>
            </ul>
            <p>
              Join us to take charge of your health, monitor, track, and enhance your well-being effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MainPage() {
  function Header() {
    return (
      <header>
        <div className="container">
          <h1>Diabetes Health Checker</h1>
        </div>
      </header>
    );
  }

  function Footer() {
    return (
      <footer className="mt-auto">
        <div className="container">
          <p><a href="mailto:healthchecker@gmail.com"><span className="material-icons">email</span>healthchecker@gmail.com</a></p>
          <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
          <p>&copy; Diabetic Health Checker 2023</p>
        </div>
      </footer>
    );
  }

  function Card({ iconSrc, title, description, buttonText, buttonLink }) {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="icon">
            <img src={iconSrc} alt="Icon" className="card-image" />
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          {buttonText && (
            <Link to={buttonLink} className="btn btn-dark">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="left-container">View my Account</h2>
            <Card
              iconSrc="/img/profile_icon.png"
              title="Profile"
              description="Creating an account unlocks a personalized experience. Manage your diabetes journey by maintaining a health diary to track your daily progress. Monitor crucial health metrics like blood pressure, blood glucose levels, and more through our health tracker. Stay informed about your health and manage your wellness with ease."
              buttonText="Create Account"
              buttonLink="/profile"
            />
            <h2 className="left-container">Find a Treatment Center</h2>
            <Card
              iconSrc="/img/hospital_icon.png"
              title="Safe In-Person Appointments"
              description="Looking for medical care? Use our tool to find nearby hospitals, clinics, or specialized centers. Easily locate medical facilities based on your location or search criteria. From routine check-ups to specialized care, connect with medical professionals for your specific needs."
              buttonText="Find your nearest center"
              buttonLink="hospital.html"
            />
          </div>
        </div>
      </div>
      <AdditionalInfo />
      <Footer />
    </div>
  );
}