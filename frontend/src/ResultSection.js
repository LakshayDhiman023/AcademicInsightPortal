import React from 'react';
import ResultCard from './ResultCard'; // Assuming ResultCard.js is in the same directory

const ResultSection = ({ semestersData }) => {
  // Calculate CPI (Cumulative Performance Index)
  const calculateCPI = (semesters) => {
    const totalSPI = semesters.reduce((acc, curr) => acc + curr.spi, 0);
    const cpi = totalSPI / semesters.length;
    return cpi.toFixed(2);
  };

  const cpi = calculateCPI(semestersData);

  return (
    <div className="result-section">
      <div className="result-heading">
        <h1>Result Management</h1>
        <h2>
          <span>CPI: {cpi}/10</span>
        </h2>
      </div>
      <div className="result-cards">
        {semestersData.map((semester, index) => (
          <React.Fragment key={index}>
            <ResultCard semester={semester} />
            {index < semestersData.length - 1 && <div className="vertical-line"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ResultSection;
