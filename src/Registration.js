import React, { useState } from 'react';

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
    // Here you can handle form submission, e.g., sending data to a server
    console.log('Form submitted:', { username, email, password });
  };

  // Inline CSS styles
  const formStyles = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyles = {
    backgroundColor: '#218838',
  };

  return (
    <div className='Registration' style={{ textAlign: 'center' }}>
      <header className='App-header'>
        <h1>Registration Form</h1>
        <form 
          className='registration-form' 
          style={formStyles}
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
              style={inputStyles}
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
              style={inputStyles}
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
              style={inputStyles}
            />
          </div>

          <button 
            type="submit"
            style={buttonStyles}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
          >
            Register
          </button>
        </form>
      </header>
    </div>
  );
}

export default Registration;
