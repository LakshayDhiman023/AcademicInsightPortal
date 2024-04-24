import React, { useId } from 'react';
import "./TeacherRole.css"

// import CenterComponent from './CenterComponent';
import AnnouncementSection from '../announcement/AnnouncementSection';
import TeacherProfile from '../teachers/TeacherProfil';
import AddStudent from '../students/AddStudent';
import AddResultForm from '../result/AddResultForm';
import DeleteStudent from '../students/DeleteStudent';
import UpdateStudent from '../students/UpdateStudent';
import DeleteTeacher from '../teachers/DeleteTeacher';

function TeacherRole({userId}) {
  return (
    <div className="teacher-role-container">
      <div className="left-column">
        <TeacherProfile userId = {useId}/>
      </div>
      <div className="center-column">
        {/* <AddStudent/> */}
        {/* <AddResultForm/> */}
        {/* <DeleteStudent/> */}
        {/* <UpdateStudent/> */}
        <DeleteTeacher/>
      </div>
      <div className="right-column">
        <AnnouncementSection />
      </div>
    </div>
  );
}

export default TeacherRole;
