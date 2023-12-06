import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Login } from './Login';

export function Profile() {
  const [user, setUser] = useState(null);

  // Function to handle login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>User Profile</h1>
        </div>
      </header>
      <Navigation />
      <div className="left-container">
        {!user ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <div className="profile-card">
              <img src="/img/profile_icon.png" alt="Profile Icon" />
              <div className="user-info">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}