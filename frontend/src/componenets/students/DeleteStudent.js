import React, { useState } from 'react';
import axios from 'axios';
import './DeleteStudent.css'; // Import your CSS file

const DeleteStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/student/${studentId}`);
      
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error deleting student data.');
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="delete-student-container">
      <h2>Delete Student</h2>
      <input
        className="delete-student-input"
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button className="delete-student-button" onClick={handleDelete}>
        Delete
      </button>
      {message && <div className="delete-message">{message}</div>}
    </div>
  );
};

export default DeleteStudent;
