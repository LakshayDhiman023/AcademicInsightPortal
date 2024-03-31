import React from 'react';

// Function to calculate overall CGPA
function calculateOverallCGPA(subjectResults) {
  let totalGradePoints = 0;
  let totalCredits = 0;

  // Iterate through each subject result
  subjectResults.forEach(subject => {
    // Assuming each subject has a credit field representing its credit hours
    const credits = subject.credit; // You may need to adjust this based on your data structure

    // Assuming each subject has a grade field representing its grade in a GPA scale (e.g., 4 for A, 3 for B, etc.)
    const gradePoint = subject.grade * credits; // Weighted grade point

    totalGradePoints += gradePoint;
    totalCredits += credits;
  });

  // Calculate overall CGPA
  const overallCGPA = totalGradePoints / totalCredits;

  return overallCGPA;
}
const subjectResults = [
  { name: "Mathematics", grade: 4, credit: 3 },
  { name: "Science", grade: 3.5, credit: 4 },
  { name: "English", grade: 3.7, credit: 3 },
  { name: "History", grade: 4, credit: 3 },
  { name: "Computer Science", grade: 3.8, credit: 4 }
];


const Result = () => {
  // Calculate overall CGPA
  const overallCGPA = calculateOverallCGPA(subjectResults).toFixed(2);
  

  return (
    <div className="result">
      <h2>Results</h2>
      <div className="subject-results">
        <h3>Subject Results</h3>
        <ul>
          {subjectResults.map((subject, index) => (
            <li key={index}>
              <span>{subject.name}: </span>
              <span>{subject.grade}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="overall-cgpa">
        <h3>Overall CGPA</h3>
        <p>{overallCGPA}</p>
      </div>
    </div>
  );
}

export default Result;
