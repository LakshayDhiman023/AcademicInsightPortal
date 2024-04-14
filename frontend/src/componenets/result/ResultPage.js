import React from 'react';

function ResultPage({ semestersData }) {
    return (
        <div className="result-page">
          {semestersData.map((semester, index) => (
            <div key={index} className="semester-card">
              <h2>Semester {semester.semester}</h2>
              <div className="subjects-list">
                {semester.subjects.map((subject, i) => (
                  <div key={i} className="subject">
                    <pre>{subject.name}:      {subject.marks}</pre>
                  </div>
                ))}
              </div>
              <p>SPI: {calculateSPI(semester.subjects)}</p>
            </div>
          ))}
        </div>
      );
}

function calculateSPI(subjects) {
  const totalMarks = subjects.reduce((total, subject) => total + subject.marks, 0);
  return (totalMarks / subjects.length).toFixed(2);
}

export default ResultPage;
