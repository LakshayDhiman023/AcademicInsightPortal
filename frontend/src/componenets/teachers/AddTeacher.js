import React, { useState } from 'react';
import axios from 'axios';
import './AddTeacher.css'; // Import CSS file

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    teacher_id: '',
    name: '',
    contact_no: '',
    email: '',
    password: '',
    dob: '',
  });
  const [message, setMessage] = useState(null); // State for the message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation for contact number length
    if (formData.contact_no.length !== 10) {
      setMessage({ text: 'Contact number must be 10 characters long', type: 'error' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/addTeacher', formData);
      console.log('Teacher added successfully:', response.data);
      setMessage({ text: 'Teacher added successfully', type: 'success' });
      // Reset form after successful submission
      setFormData({
        teacher_id: '',
        name: '',
        contact_no: '',
        email: '',
        password: '',
        dob: '',
      });
    } catch (error) {
      console.error('Error adding teacher:', error);
      setMessage({ text: 'Error adding teacher', type: 'error' });
    }
  };

  return (
    <div className="add-teacher-container">
        
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit} className="add-teacher-form">
        <div>
          <label htmlFor="teacher_id">Teacher ID:</label>
          <input
            type="text"
            id="teacher_id"
            name="teacher_id"
            value={formData.teacher_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact_no">Contact Number:</label>
          <input
            type="text"
            id="contact_no"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Teacher</button>
        {message && (
          <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</p>
        )}
      </form>
    </div>
  );
};

export default AddTeacher;
