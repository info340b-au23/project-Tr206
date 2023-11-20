import React from 'react';
import { Navigation } from './Navigation'; 

export function Profile() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>User Profile</h1>
        </div>
      </header>
      <Navigation /> {/* Include the Navigation component */}
      <div className="left-container">
        <div className="profile-options">
          <h2>Create or Log In to Your Account</h2>
          <p>If you haven't created an account yet, <button>Create Account</button></p>
          <p>If you already have an account, <button>Login</button></p>
        </div>
      </div>
    </div>
  );
}