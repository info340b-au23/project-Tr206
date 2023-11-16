import React from 'react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

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

  // Footer component
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

  function Card(props) {
    return (
      <div className="d-flex col-md-6 col-xl-3 mb-4">
        <div className="card h-100 w-100 mb-4">
          <div className="card-body d-flex flex-column">
            <div className="row g-0">
              <div className="col-sm-auto col-xl-12">
                <img src={props.imgSrc} alt={props.title} className="pb-3 card-image" />
              </div>
              <div className="col-sm">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                {props.buttonText && (
                  <Link to={props.buttonLink} className="btn btn-dark mt-auto">{props.buttonText}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SignUpCard() {
    return (
      <Card
        title="Create an Account"
        description="Sign up now to create a profile and access more features."
        buttonLink="/Profile"
      />
    );
  }

  function FindHospitalCard() {
    return (
      <Card
        imgSrc="img/hospital.jpg"
        title="Find a treatment center near you"
        description="Want to follow up with a doctor find a hospital near you?"
        buttonLink="hospital.html"
        buttonText="Find your hospital"
      />
    );
  }

  return (
    <div>
      <Navigation />
      <Header />
      {/* Other components or content */}
      <div className="container">
        <div className="card-container">
          <SignUpCard />
          <FindHospitalCard />
          {/* add more cards or components as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
