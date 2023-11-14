import React from 'react';
import { Navigation } from './Navigation';
import { Profile } from './Profile';

export function MainPage() {
  function Header() {
    return <header>Header content</header>;
  }

  function Footer() {
    return <footer>Footer content</footer>;
  }

  function Card(props) {
    return (
      <div className="card">
        {/* Card content */}
        <img src={props.imgSrc} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>{props.buttonText}</button>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <Header />
      <div className="row">
        {/* Card 1 */}
        <Card
          imgSrc="img/profile.jpg"
          title="Sign Up Now!"
          description="Sign up now to create an account with us to save your information."
          buttonText="Create an account"
        />

        {/* Card 2 */}
        <Card
          imgSrc="img/doctor.jpg"
          title="Take the Symptom Quiz!"
          description="Want to track or discover what your symptoms may be from?"
          buttonText="Take Quiz"
        />

        {/* Card 3 */}
        <Card
          imgSrc="img/hospital.jpg"
          title="Find a treatment center near you"
          description="Want to follow up with a doctor find a hospital near you?"
          buttonText="Find your hospital"
        />
      </div>
      <Profile />
      <Footer />
    </div>
  );
}