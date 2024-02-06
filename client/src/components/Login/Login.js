import React, { useState } from 'react'
import Axios from 'axios'
function Login() {

  const [user, setUser] = useState('Student');
  
  const changeUser = () =>{
    // console.log("hello");
    if(user === 'Student') setUser('Admin');
    else setUser('Student');
  }

  const [userData, setUserData] = useState({email: "", password: ""});
  
  const onValueChange = (e) =>{
    setUserData({...userData, [e.target.name] : e.target.value});
  }

  const handleSubmit = () =>{
    Axios.post("http://localhost:3000/", {
      username: user.email,
      password: user.password
    }).then((response) => {
      console.log(response);
    })
  }
  

  return (
    <>
      <div>
        <h1>{user} Login</h1>
        <p className='text-red-600'>Email</p>
        <input type="email" name='email' onChange={(e) => onValueChange(e)}/>
        <p>Password</p>
        <input type="password" name='password' onChange={(e) => onValueChange(e)}/>

        <button onClick={handleSubmit}>Login</button>

        <button onClick={() => changeUser()}>{user === 'Student' ? "Login as a Admin": "Login as a Student"}</button>
      </div>
    </>
  )
}

export default Login