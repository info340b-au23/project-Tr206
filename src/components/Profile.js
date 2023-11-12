import React from 'react';

export function Profile() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>User Profile</h1>
          </div>
        </header>
  
        <div className="container">
          {/* Add profile content here */}
          <p>User information goes here...</p>
        </div>
  
        <footer className="fixed-bottom">
          <div className="container">
            <p>
              <a href="mailto:user@example.com">
                <span className="material-icons">email</span>user@example.com
              </a>
            </p>
            <p>
              <a href="tel:555-555-5555">
                <span className="material-icons">phone</span>555-555-5555
              </a>
            </p>
            <p>&copy; User Profile 2023</p>
          </div>
        </footer>
      </div>
    );
}