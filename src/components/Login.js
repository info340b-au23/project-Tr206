import React, { useState } from 'react';

export function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const userDataFromCSV = [
        {
          id: 1,
          name: 'John Doe',
          age: 30,
          email: 'john@example.com'
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 25,
          email: 'jane@example.com'
        },
        {
          id: 3,
          name: 'Aice Johnson',
          age: 28,
          email: 'alice@example.com'
        },
        {
            id: 4,
            name: 'Mark Zuckerburg',
            age: 45,
            email: 'mz@example.com'
        },
        {
            id: 5,
            name: 'Taylor Swift',
            age: 33,
            email: 'tswift@example.com'
        }
      ];
  
      const foundUser = userDataFromCSV.find((user) => user.email === email);
  
      if (foundUser) {
        handleLogin(foundUser);
      } else {
        setError('Invalid email');
      }
    };
  
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }