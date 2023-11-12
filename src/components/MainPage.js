import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

export function HomePage() {
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
    
          <Footer />
        </div>
      );
}