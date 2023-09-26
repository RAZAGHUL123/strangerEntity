import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  // Define state variables for form inputs and error handling
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
      // Send a POST request to the API's registration endpoint
      const response = await axios.post('http://localhost:3000/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Assuming the API returns a success message upon successful registration
      const { message } = response.data;

      // Clear form data and errors
      setFormData({ username: '', email: '', password: '' });
      setError(null);

      // Display a success message to the user
      alert(message);

      // You may also want to redirect the user to the login page after successful registration
      // Example: history.push('/login');
    } catch (err) {
      // Handle registration errors (e.g., duplicate email)
      setError('Registration failed. Please check your information.');
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default RegisterForm;
