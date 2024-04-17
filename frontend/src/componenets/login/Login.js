import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the external CSS file

const Login = ({ isLogin, setUser }) => {
  const [credentials, setCredentials] = useState({
    user: "student",
    id: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, id, password } = credentials;
    if (!user || !id || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/login", credentials);
      console.log(response);
      if (response) {
        isLogin(credentials.id);
        setUser(credentials.user);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <select name="user" id="user" value={credentials.user} onChange={handleSelectChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="id">User ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={credentials.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
