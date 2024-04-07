import React from 'react';

function AttendancePage({ attendanceData }) {
  return (
    <div className="attendance-page">
      {attendanceData.map((semester, index) => (
        <div key={index} className="semester-card">
          <h2>Semester {semester.semester}</h2>
          <div className="subjects-list">
            {semester.subjects.map((subject, i) => (
              <div key={i} className="subject">
                <pre>{subject.name}:      {subject.attendance}%</pre>
              </div>
            ))}
          </div>
          <p>Overall Attendance: {calculateOverallAttendance(semester.subjects)}%</p>
        </div>
      ))}
    </div>
  );
}

function calculateOverallAttendance(subjects) {
  const totalAttendance = subjects.reduce((total, subject) => total + subject.attendance, 0);
  return (totalAttendance / subjects.length).toFixed(2);
}

export default AttendancePage;
