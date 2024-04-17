import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css'; // Import CSS file

const AddStudent = () => {
  const [formData, setFormData] = useState({
    student_id: '',
    name: '',
    contact_no: '',
    email: '',
    password: '',
    course: '',
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
    console.log(formData);
    // Frontend validation for contact number length
    if (formData.contact_no.length !== 10) {
      setMessage({ text: 'Contact number must be 10 characters long', type: 'error' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/addStudent', formData);
      console.log('Student added successfully:', response.data);
      setMessage({ text: 'Student added successfully', type: 'success' });
      // Reset form after successful submission
      setFormData({
        student_id: '',
        name: '',
        contact_no: '',
        email: '',
        password: '',
        course: '',
        dob: '',
      });
    } catch (error) {
      console.error('Error adding student:', error);
      setMessage({ text: 'Error adding student', type: 'error' });
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div>
          <label htmlFor="student_id">Student ID:</label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id}
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
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
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
        <button type="submit" className="submit-button">Add Student</button>
        {message && (
          <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</p>
        )}
      </form>
    </div>
  );
};

export default AddStudent;
