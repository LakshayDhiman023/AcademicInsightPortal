import React, { useState, useEffect } from 'react';

function ResultTable() {
    // const [resultData, setresultData] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, []);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/resultDetails');
    //     const data = await response.json();
    //     setresultData(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    const resultData = [
        {
            Student_ID: '001',
            Semester: '3',
            Subject1: '80%',
            Subject2: '90%',
            Subject3: '85.55%',
            Subject4: '95.55%',
            Subject5: '66.66%'
        },
        {
            Student_ID: '002',
            Semester: '3',
            Subject1: '80%',
            Subject2: '90%',
            Subject3: '85.55%',
            Subject4: '95.55%',
            Subject5: '66.66%'
        },
    ];

    return (
        <div className="attendance-table">
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Semester</th>
                        <th>Data Structures</th>
                        <th>Algorithms</th>
                        <th>System Software</th>
                        <th>Software Engineering</th>
                        <th>Maths</th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Student_ID}</td>
                            <td>{row.Semester}</td>
                            <td>{row.Subject1}</td>
                            <td>{row.Subject2}</td>
                            <td>{row.Subject3}</td>
                            <td>{row.Subject4}</td>
                            <td>{row.Subject5}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
