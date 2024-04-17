import React, { useState } from 'react';
import './App.css';
import StudentRole from './componenets/roles/StudentRole';
import TeacherRole from './componenets/roles/TeacherRole';
import AdminRole from './componenets/roles/AdminRole';
import Login from './componenets/login/Login';

const App = () => {


  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState("");

  return (
    userId === 0?<Login isLogin={setUserId} setUser = {setUser}/>:
    <>
    {(() => {
      if (user === "student") {
        return <StudentRole/>
      } else if(user === "teacher") {
        return <TeacherRole userId = {userId}/>
      }
      else if(user === "admin"){
        return <AdminRole/>
      }
    })()}
    </>
  );
};

export default App;
