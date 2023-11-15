import React from 'react';
import { Link } from 'react-router-dom';

export function Profile() {
    return (
      <div>
      <header>
        <div className="container">
          <h1>User Profile</h1>
          <p>If you haven't created an account yet, <Link to="/create-account">create an account</Link>.</p>
          <p>If you already have an account, <Link to="/login">log in here</Link>.</p>
        </div>
      </header>
    </div>
    );
}