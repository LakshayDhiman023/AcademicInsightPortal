import React, { useState, useEffect } from 'react';

const TotalComponent = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/total')
      .then(response => response.json())
      .then(data => {
        setTotalStudents(data.totalStudents);
        setTotalTeachers(data.totalTeachers);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="totalContainer">
      <div className="num">
        <div className="large-number">{totalStudents}</div>
        <div className="large-number">{totalTeachers}</div>
      </div>
      <div className="labels">
        <div className="label">Total Students</div>
        <div className="label">Total Teachers</div>
      </div>
    </div>
  );
};

export default TotalComponent;
