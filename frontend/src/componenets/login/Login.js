import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'; // Import the external CSS file

const Login = ({isLogin}) => {
  const [credentials, setCredentails] = useState({
    student_id: "", 
    password: ""
  })
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = (e)=>{
    e.preventDefault();
    console.log(credentials);
    const getData = async() =>{
        try {
            const response =await axios.post("http://localhost:8000/login", credentials)
            console.log(response);
            if(response){
                isLogin(credentials.student_id);
            }
        } catch (error) {
            console.log(error.message);
            setErrorMessage('Invalid credentials. Please try again.');
        }
    }
    getData();
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      
        
        <>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="studentId">Student ID</label>
              <input
                type="text"
                id="studentId"
                name='student_id'
                value={credentials.student_id}
                onChange={(e) => setCredentails({ ...credentials, [e.target.name]: e.target.value })}

              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name='password'
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentails({ ...credentials, [e.target.name]: e.target.value })}

              />
            </div>
            <button type="submit" onClick={handleLogin}>Login</button>
          </form>
        </>
      
    </div>
  );
};

export default Login;
