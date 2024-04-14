import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AttendancePage() {
  const [attendanceData, setAttendanceData] = useState({});
  const id = 1;
  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/attendance/${id}`);
        // console.log(response);
        setAttendanceData(response.data)
        // console.log(attendanceData);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [])

  useEffect(() => {
    // console.log(attendanceData);
  }, [attendanceData]); 

  return (
    <div className="attendance-page">
      {Object.keys(attendanceData).map((semesterKey, index) => (
        <div key={index} className="semester-card">
          <h2>Semester {index + 1}</h2>
          <div className="subjects-list">
            <div className="subject">
              <pre>Subject 1: {attendanceData[semesterKey][0].subject1_attendance}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 2: {attendanceData[semesterKey][0].subject2_attendance}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 3: {attendanceData[semesterKey][0].subject3_attendance}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 4: {attendanceData[semesterKey][0].subject4_attendance}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 5: {attendanceData[semesterKey][0].subject5_attendance}%</pre>
            </div>
          </div>
          <p>Overall Attendance: {calculateOverallAttendance(attendanceData[semesterKey][0])}%</p>
        </div>
      ))}
    </div>
  );
}

function calculateOverallAttendance(subjectData) {
  const totalSubjects = Object.keys(subjectData).length - 1; // Excluding the "roll_number" property
  let totalAttendance = 0;

  for (let i = 1; i <= totalSubjects; i++) {
    totalAttendance += subjectData[`subject${i}_attendance`];
  }

  return (totalAttendance / totalSubjects).toFixed(2); // Calculate average and round to 2 decimal places
}


export default AttendancePage;
