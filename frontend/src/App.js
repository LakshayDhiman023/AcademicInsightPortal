import React, { useState } from 'react';
import './App.css';
import Navbar from './componenets/navbar/Navbar';
import userLogo from './images/logo.jpg';
import UserProfile from './componenets/userProfile/UserProfile';
import AttendanceComponent from './componenets/attendence/AttendanceComponent';
import AnnouncementSection from './componenets/announcement/AnnouncementSection';
import ResultSection from './componenets/result/ResultSection';
import ResultPage from './componenets/result/ResultPage'
import AttendancePage from './componenets/attendence/AttendancePage'
import Login from './componenets/login/Login';

const App = () => {

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  const user = {
    name: 'Ayush Kumar',
    image: userLogo,
    course: 'Computer Science',
    dob: 'December 9 2004',
    email: 'ayushkumar@gmail.com',
    contact: '1234567890',
  };

  const subjectsData = [
    { subject: 'Maths', present: 15, total: 25 },
    { subject: 'Science', present: 20, total: 25 },
    { subject: 'English', present: 18, total: 25 },
    { subject: 'History', present: 22, total: 25 },
    { subject: 'Geography', present: 17, total: 25 },
  ];

  const semData = [
    { title: 'Semester 1', spi: 8.5 },
    { title: 'Semester 2', spi: 9.0 },
    { title: 'Semester 3', spi: 8.2 },
    { title: 'Semester 4', spi: 8.8 }
  ];

  
  
  // console.log(attendanceData);
  let secondContent;
  switch (activeTab) {
    case 'home':
      secondContent = (
        <div className='second'>
          <div className="numvalues">
            <AttendanceComponent subjectsData={subjectsData} />
          </div>
          <div className='result'>
            <ResultSection semestersData={semData} />
          </div>
        </div>
      );
      break;
    case 'attendance':
      secondContent = (
        <div className='second'>
          <AttendancePage  />
        </div>
      );
      break;
    case 'result':
      secondContent = (
        <div className='second'>
          <ResultPage />
        </div>
      );
      break;
    default:
      secondContent = null;
  }


  const [userId, setUSerId] = useState(0);


  return (
    userId === 0?<Login isLogin={setUSerId}/>:
    <div className="container">
      <Navbar onTabClick={handleTabClick} activeTab={activeTab} />
      <div className="content">
        <div className="userinfo">
          
          <UserProfile user={user} />
        </div>
        {secondContent}
        <div className="announcements">
          <AnnouncementSection />
        </div>
      </div>
    </div>
  );
};

export default App;
