import React, { useState } from 'react';
import './TeacherApp.css';
import Navbar from './componenets/navbar/TeacherNavbar';
import UserProfile from './componenets/userProfile/TeacherUserProfile';
import ResultPage from './componenets/result/TeacherResultPage';
import AttendancePage from './componenets/attendence/TeacherAttendancePage';
import AnnouncementPage from './componenets/announcement/TeacherAnnouncementSection';
import Announcement from './componenets/announcement/TeacherAnnouncement';
import Result from './componenets/result/TeacherResult';
import Attendance from './componenets/attendence/TeacherAttendance';


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
            <ResultPage />
          </div>
          <div className="attendance">
            <AttendancePage />
          </div>
          <div className="announcement">
            <AnnouncementPage />
          </div>
        </div>
      );
      break;
    case 'attendance':
      secondContent = (
        <div className='second'>
          <Attendance />
        </div>
      );
      break;
    case 'result':
      secondContent = (
        <div className='second'>
          <Result />
        </div>
      );
      break;
    case 'announcement':
      secondContent = (
        <div className='second'>
          <Announcement />
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
