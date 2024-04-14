import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ResultPage() {
  const [semestersData, setSemestersData] = useState({});
  const id = 1;

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/result/${id}`);
        // console.log(response);
        setSemestersData(response.data)
        // console.log(attendanceData);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [])

  useEffect(() => {
    console.log(semestersData);
  }, [semestersData]); 
    return (
        <div className="result-page">
          {Object.keys(semestersData).map((semesterKey, index) => (
        <div key={index} className="semester-card">
          <h2>Semester {index + 1}</h2>
          <div className="subjects-list">
            <div className="subject">
              <pre>Subject 1: {semestersData[semesterKey][0].subject1_result}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 2: {semestersData[semesterKey][0].subject2_result}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 3: {semestersData[semesterKey][0].subject3_result}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 4: {semestersData[semesterKey][0].subject4_result}%</pre>
            </div>
            <div className="subject">
              <pre>Subject 5: {semestersData[semesterKey][0].subject5_result}%</pre>
            </div>
          </div>
          <p>Overall Result Percentage: {calculateSPI(semestersData[semesterKey][0])}%</p>
        </div>
      ))}
        </div>
      );
}

function calculateSPI(semData) {
  const totalSubjects = Object.keys(semData).length - 1; // Excluding the "roll_number" property
  let totalMarks = 0;

  for (let i = 1; i <= totalSubjects; i++) {
    totalMarks += semData[`subject${i}_result`];
  }

  return (totalMarks / totalSubjects).toFixed(2); // Calculate average and round to 2 decimal places
}

export default ResultPage;
