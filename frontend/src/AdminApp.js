import React, { useState } from 'react';
import './AdminApp.css';
import Navbar from './componenets/navbar/AdminNavbar';
import UserProfile from './componenets/userProfile/AdminUserProfile';
import TeachersPage from './componenets/students/AdminStudentsPage';
import StudentsPage from './componenets/teachers/AdminTeachersPage';
import TotalPage from './componenets/total/AdminTotalSection';
import Result from './componenets/students/AdminStudentTable';
import Attendance from './componenets/teachers/AdminTeacherTable';


const App = () => {

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let secondContent;
  switch (activeTab) {
    case 'home':
      secondContent = (
        <div className="second">
          <div className="result">
            <TeachersPage />
          </div>
          <div className="attendance">
            <StudentsPage />
          </div>
          <div className="announcement">
            <TotalPage />
          </div>
        </div>
      );
      break;
    case 'teachers':
      secondContent = (
        <div className='second'>
          <Attendance />
        </div>
      );
      break;
    case 'students':
      secondContent = (
        <div className='second'>
          <Result />
        </div>
      );
      break;
    default:
      secondContent = null;
  }

  return (
    <div className="container">
      <Navbar onTabClick={handleTabClick} activeTab={activeTab} />
      <div className="content">
        <div className="userinfo">
          <UserProfile />
        </div>
        {secondContent}
      </div>
    </div>
  );
};

export default App;
