import React, { useId } from 'react';
import "./TeacherRole.css"

// import CenterComponent from './CenterComponent';
import AnnouncementSection from '../announcement/AnnouncementSection';
import TeacherProfile from '../teachers/TeacherProfil';
import AddStudent from '../students/AddStudent';
import AddResultForm from '../result/AddResultForm';

function TeacherRole({userId}) {
  return (
    <div className="teacher-role-container">
      <div className="left-column">
        <TeacherProfile userId = {useId}/>
      </div>
      <div className="center-column">
        {/* <AddStudent/> */}
        <AddResultForm/>
      </div>
      <div className="right-column">
        <AnnouncementSection />
      </div>
    </div>
  );
}

export default TeacherRole;
