import React from 'react';

const ResultCard = ({ semester }) => {
  return (
    <div className="result-card">
      <h3>{semester.title}</h3>
      <p>SPI: {semester.spi}/10</p>
    </div>
  );
};

export default ResultCard;
