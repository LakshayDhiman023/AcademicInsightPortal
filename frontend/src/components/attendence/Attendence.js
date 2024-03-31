import React from 'react';
const attendanceData = [
  { name: "Mathematics", attendancePercentage: 85 },
  { name: "Science", attendancePercentage: 90 },
  { name: "English", attendancePercentage: 80 },
  { name: "History", attendancePercentage: 95 },
  { name: "Computer Science", attendancePercentage: 88 }
];


const Attendance = () => {
  return (
    <div className="attendance">
      <h2>Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.attendancePercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
