import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  // Define state variables for form inputs and error handling
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the API's login endpoint
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', {
        username: formData.username,
        password: formData.password,
      });

      // Assuming the API returns a JWT upon successful login
      const { token } = response.data;

      // Store the JWT securely (e.g., in localStorage)
      localStorage.setItem('jwtToken', token);

      // Clear form data and errors
      setFormData({ username: '', password: '' });
      setError(null);

      // You may also want to redirect the user to another page upon successful login
      // Example: history.push('/dashboard');
    } catch (err) {
      // Handle login errors (e.g., invalid credentials)
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LoginForm;
