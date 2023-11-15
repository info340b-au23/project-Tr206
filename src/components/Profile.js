import React from 'react';
import { Link } from 'react-router-dom';

export function Profile() {
  return (
      <div>
          <header>
              <div className="container">
                  <h1>User Profile</h1>
              </div>
          </header>
          <nav className="green-nav">
              <ul>
              <li><Link to="/"><img src="img/home.png" alt="Home Icon" />Home</Link></li>
              <li><Link to="/HealthStats"><img src="img/quiz.png" alt="Quiz Icon" />Health Tracker</Link></li>
              <li><Link to="/FindLocation"><img src="img/location.png" alt="Location Icon" />Find a Treatment Center Near you</Link></li>
              <li><Link to="/Diary"><img src="img/diary.png" alt="Diary Icon" />Diary</Link></li>
                  {/* omit the Profile link here since we're on the Profile page */}
              </ul>
          </nav>
          <div className="left-container">
              <div className="profile-options">
                  <h2>Create or Log In to Your Account</h2>
                  <p>If you haven't created an account yet, <Link to="/create-account"><button>Create Account</button></Link>.</p>
                  <p>If you already have an account, <Link to="/login"><button>Login</button></Link>.</p>
              </div>
          </div>
      </div>
  );
}