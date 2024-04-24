import React, { useState } from 'react';
import axios from 'axios';
import './DeleteTeacher.css'; // Import CSS file for styling

const DeleteTeacher = () => {
  const [teacherId, setTeacherId] = useState('');

  const handleChange = (e) => {
    setTeacherId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/teacher/${teacherId}`);
      alert('Teacher deleted successfully!');
      setTeacherId(''); // Clear the input field after deletion
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <form className="delete-teacher-form" onSubmit={handleSubmit}>
      <label htmlFor="teacherId">Teacher ID:</label>
      <input
        type="text"
        id="teacherId"
        name="teacherId"
        value={teacherId}
        onChange={handleChange}
        required
      />
      <button type="submit">Delete Teacher</button>
    </form>
  );
};

export default DeleteTeacher;
