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

const App = () => {

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const announcements = [
    { title: 'Announcement 1', content: 'This is the content of Announcement 1.' },
    { title: 'Announcement 2', content: 'This is the content of Announcement 2.' },
    { title: 'Announcement 3', content: 'This is the content of Announcement 3.' }
  ];

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


  return (
    <div className="container">
      <Navbar onTabClick={handleTabClick} activeTab={activeTab} />
      <div className="content">
        <div className="userinfo">
          <div className="user-profile-section">
            <div className="user-image">
              <img src={user.image} alt={user.name} />
            </div>
            <div className="user-details">
              <h2 className="user-name">{user.name}</h2>
            </div>
          </div>
          <UserProfile user={user} />
        </div>
        {secondContent}
        <div className="announcements">
          <AnnouncementSection announcements={announcements} />
        </div>
      </div>
    </div>
  );
};

export default App;
