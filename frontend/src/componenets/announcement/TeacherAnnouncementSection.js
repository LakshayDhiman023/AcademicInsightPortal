import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
    const [formData, setFormData] = useState({
      announcement: '',
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
        const response = await axios.post('http://localhost:3000/addAnnouncement', formData);
        console.log(response.data); // Handle successful submission response
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <div>
        <h2>Add Announcement</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="studentId">Announcement</label>
            <textarea id="studentId" name="studentId" rows="4" cols="58" value={formData.studentId} onChange={handleChange}>

            </textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default AttendanceForm;