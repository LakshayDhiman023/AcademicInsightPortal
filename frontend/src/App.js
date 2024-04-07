import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import userLogo from './images/logo.jpg';
import UserProfile from './UserProfile';
import AttendanceComponent from './AttendanceComponent';
import AnnouncementSection from './AnnouncementSection';
import ResultSection from './ResultSection';
import ResultPage from './ResultPage';
import AttendancePage from './AttendancePage';

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
    name: 'John Doe',
    image: userLogo,
    course: 'Computer Science',
    dob: 'January 1, 1990',
    email: 'john.doe@example.com',
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

  const semestersData = [
    {
      semester: 1,
      subjects: [
        { name: 'Subject 1', marks: 80 },
        { name: 'Subject 2', marks: 75 },
        { name: 'Subject 3', marks: 85 },
        { name: 'Subject 4', marks: 90 },
        { name: 'Subject 5', marks: 95 }
      ]
    },
    {
      semester: 2,
      subjects: [
        { name: 'Subject 1', marks: 80 },
        { name: 'Subject 2', marks: 75 },
        { name: 'Subject 3', marks: 85 },
        { name: 'Subject 4', marks: 90 },
        { name: 'Subject 5', marks: 95 }
      ]
    },
    {
      semester: 3,
      subjects: [
        { name: 'Subject 1', marks: 80 },
        { name: 'Subject 2', marks: 75 },
        { name: 'Subject 3', marks: 85 },
        { name: 'Subject 4', marks: 90 },
        { name: 'Subject 5', marks: 95 }
      ]
    },
    {
      semester: 4,
      subjects: [
        { name: 'Subject 1', marks: 80 },
        { name: 'Subject 2', marks: 75 },
        { name: 'Subject 3', marks: 85 },
        { name: 'Subject 4', marks: 90 },
        { name: 'Subject 5', marks: 95 }
      ]
    },
  ];
  const attendanceData = [
    {
      semester: 1,
      subjects: [
        { name: 'Subject 1', attendance: 90 },
        { name: 'Subject 2', attendance: 85 },
        { name: 'Subject 3', attendance: 95 },
        { name: 'Subject 4', attendance: 80 },
        { name: 'Subject 5', attendance: 75 }
      ]
    },
    {
      semester: 2,
      subjects: [
        { name: 'Subject 1', attendance: 90 },
        { name: 'Subject 2', attendance: 85 },
        { name: 'Subject 3', attendance: 95 },
        { name: 'Subject 4', attendance: 80 },
        { name: 'Subject 5', attendance: 75 }
      ]
    },
    {
      semester: 3,
      subjects: [
        { name: 'Subject 1', attendance: 90 },
        { name: 'Subject 2', attendance: 85 },
        { name: 'Subject 3', attendance: 95 },
        { name: 'Subject 4', attendance: 80 },
        { name: 'Subject 5', attendance: 75 }
      ]
    },
    {
      semester: 4,
      subjects: [
        { name: 'Subject 1', attendance: 90 },
        { name: 'Subject 2', attendance: 85 },
        { name: 'Subject 3', attendance: 95 },
        { name: 'Subject 4', attendance: 80 },
        { name: 'Subject 5', attendance: 75 }
      ]
    }
  ];
  console.log(attendanceData);
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
          <AttendancePage attendanceData={attendanceData} />
        </div>
      );
      break;
    case 'result':
      secondContent = (
        <div className='second'>
          <ResultPage semestersData={semestersData} />
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
