import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file

function Registration() {
  // State variables for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Here you can handle form submission to check if the data are sent 
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <div className='registration-container'>
      <header className='registration-header'>
        <h1>Registration Form</h1>
        <form 
          className='registration-form' 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='username'>Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit">Register</button>

        </form>
        {submitted && (
            <p className='success-message'>Registration Successful!</p>
        )}
      </header>
    </div>
  );
}

export default Registration;
