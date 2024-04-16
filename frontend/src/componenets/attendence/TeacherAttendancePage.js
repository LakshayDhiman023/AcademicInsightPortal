import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
    const [formData, setFormData] = useState({
      studentId: '',
      semester: '',
      subject1: '',
      subject2: '',
      subject3: '',
      subject4: '',
      subject5: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/addAttendance', formData);
        console.log(response.data); // Handle successful submission response
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <div>
        <h2>Add Attendance</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="semester">Semester:</label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject1">Subject 1:</label>
            <input
              type="text"
              id="subject1"
              name="subject1"
              value={formData.subject1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject2">Subject 2:</label>
            <input
              type="text"
              id="subject2"
              name="subject2"
              value={formData.subject2}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject3">Subject 3:</label>
            <input
              type="text"
              id="subject3"
              name="subject3"
              value={formData.subject3}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject4">Subject 4:</label>
            <input
              type="text"
              id="subject4"
              name="subject4"
              value={formData.subject4}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject5">Subject 5:</label>
            <input
              type="text"
              id="subject5"
              name="subject5"
              value={formData.subject5}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default AttendanceForm;