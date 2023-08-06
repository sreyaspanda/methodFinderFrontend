import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login Page'; // Set the document title for the login page
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request to the backend
    axios
      .post('http://localhost:8080/api/login?username=' + username + '&password=' + password, { username, password })
      .then((response) => {
        // If the response is successful, redirect to the home page
        if (response.status === 200) {
            navigate('/home');
        }
      })
      .catch((error) => {
        // Handle login error, e.g., show an error message
        if (error.response && error.response.status === 401) {
            setErrorMessage('Invalid credentials. Please try again.'); // Set error message
        } else {
            console.error('Login error:', error);
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;