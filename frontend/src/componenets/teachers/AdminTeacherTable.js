import React, { useState, useEffect } from 'react';

function TeacherTable() {
  const teacherData = [
    {
      Teacher_ID: '001',
      Name: 'Dhruv Bhalodia',
      DOB: '2nd April 2005',
      Contact: '1234567890',
      Course: 'Computer Science',
      Email: 'dhruvbhalodia@gmail.com'
    },
    {
      Teacher_ID: '002',
      Name: 'Dhruv Bhalodia',
      DOB: '2nd April 2005',
      Contact: '1234567890',
      Course: 'Computer Science',
      Email: 'dhruvbhalodia@gmail.com'
    },
  ];

  return (
    <div className="attendance-table">
      <h2>Teachers</h2>
      <table>
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Course</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map((row, index) => (
            <tr key={index}>
              <td>{row.Teacher_ID}</td>
              <td>{row.Name}</td>
              <td>{row.DOB}</td>
              <td>{row.Contact}</td>
              <td>{row.Course}</td>
              <td>{row.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;
