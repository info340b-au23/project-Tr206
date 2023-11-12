import React from 'react';

export function HomePage() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="symptom-1.html"><img src="img/quiz.png" alt="Quiz Icon" />Symptom Quiz</a></li>
            <li><a href="hospital.html"><img src="img/location.png" alt="Location Icon" />Find a Treatment Center Near you</a></li>
            <li><a href="#diary"><img src="img/diary.png" alt="Diary Icon" />Diary</a></li>
            <li><a href="#profile"><img src="img/profile.png" alt="Profile Icon" />Profile</a></li>
          </ul>
        </nav>
  
        <header>
          <div className="container">
            <h1>Health Checker</h1>
          </div>
        </header>
  
        <div className="row">
          {/* Placeholder Card Section */}
          <div className="col-md-6 col-xl-3 mb-4">
            <div className="card h-100 w-100 mb-4">
              <div className="card-body">
                <h2 className="card-title">Card Section 1</h2>
                <p className="card-text">This is a placeholder card section.</p>
                {/* Add more content as needed */}
              </div>
            </div>
          </div>
          {/* Add other card sections here */}
  
        </div>
  
        <footer className="fixed-bottom">
          <div className="container">
            <p><a href="mailto:healthchecker@gmail.com"><span className="material-icons">email</span>healthchecker@gmail.com</a></p>
            <p><a href="tel:555-123-4567"><span className="material-icons">phone</span>555-123-4567</a></p>
            <p>&copy; Health Symptom Checker 2023</p>
          </div>
        </footer>
      </div>
    );
}