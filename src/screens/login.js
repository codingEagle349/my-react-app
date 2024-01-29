import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    // Here you can implement your login logic, such as sending a request to a server
    // For simplicity, I'll just check if the username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          {/* Add logout button here */}
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
