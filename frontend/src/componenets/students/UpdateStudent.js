import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateStudent.css'; // Import CSS file for styling

const UpdateStudent = ({ studentId }) => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    contact_no: '',
    email: '',
    course: '',
    dob: '',
  });

  useEffect(() => {
    fetchStudentDetails();
  }, [studentId]);

  const fetchStudentDetails = async () => {
    let studentId = 5; // Ensure you're using the correct studentId logic here
    try {
      const response = await axios.get(`http://localhost:8000/student/${studentId}`);
      console.log(response.data);
      setStudentDetails(response.data); // Set initial form values from fetched data
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/students/${studentId}`, studentDetails);
      alert('Student details updated successfully!');
    } catch (error) {
      console.error('Error updating student details:', error);
    }
  };

  return (
    <form className="update-student-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={studentDetails[0].name} // Set value to the current state
        onChange={handleChange}
        required
      />
      <label htmlFor="contact_no">Contact Number:</label>
      <input
        type="text"
        id="contact_no"
        name="contact_no"
        value={studentDetails[0].contact_no}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={studentDetails[0].email}
        onChange={handleChange}
        required
      />
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        id="course"
        name="course"
        value={studentDetails[0].course}
        onChange={handleChange}
        required
      />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="text"
        id="dob"
        name="dob"
        value={formatDateString(studentDetails[0].dob)} // Format the date
        onChange={handleChange}
        required
      />
      <button type="submit">Update Details</button>
    </form>
  );
};

export default UpdateStudent;
