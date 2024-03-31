import React from 'react';
import './Dashboard.css'; // Optimum CSS styles

const student = {
  name: "John Doe",
  batch: "2022",
  currentSem: 5,
  age: 20,
  currentGPA: 3.75
};


const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Student Profile */}
      <div className="student-profile">
        <h2>Student Profile</h2>
        <div className="profile-info">
          {/* <img src={student.image} alt="Student" /> */}
          <div className="info">
            <p>Name: {student.name}</p>
            <p>Batch: {student.batch}</p>
            <p>Current Semester: {student.currentSem}</p>
            <p>Age: {student.age}</p>
            <p>Current GPA: {student.currentGPA}</p>
          </div>
        </div>
      </div>

      {/* Attendance */}
      <div className="attendance">
        <h2>Attendance</h2>
        {/* Display attendance data here */}
      </div>

      {/* Student Result */}
      <div className="student-result">
        <h2>Student Result</h2>
        {/* Display result data here */}
      </div>

      {/* Notice Board */}
      <div className="notice-board">
        <h2>Notice Board</h2>
        {/* Display notice board data here */}
      </div>
    </div>
  );
}

export default Dashboard;
