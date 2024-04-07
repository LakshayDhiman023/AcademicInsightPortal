import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AttendanceCard = ({ subject, present, total }) => {
    const percentage = Math.round((present / total) * 100);
  
    return (
        <div className="attendance-card">
          <h3>{subject}</h3>
          <div>{`${present}/${total}`}</div>
          <div className="attendance-progress">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: { width: '100%' },
                path: { stroke: '#007bff' },
                trail: { stroke: '#d6d6d6' },
                text: { fill: '#007bff', fontSize: '20px' },
              }}
            />
          </div>
        </div>
      );
    };
    
    const AttendanceComponent = ({ subjectsData }) => {
      return (
        <div className='Attendance'>
          <h1>Attendance</h1>
          <div className="cardss">
            {subjectsData.map((subjectData, index) => (
              <AttendanceCard
                key={index}
                subject={subjectData.subject}
                present={subjectData.present}
                total={subjectData.total}
              />
            ))}
          </div>
        </div>
      );
    };
    
    export default AttendanceComponent;