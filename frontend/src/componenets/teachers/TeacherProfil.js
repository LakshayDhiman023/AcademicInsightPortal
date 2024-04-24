import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TeacherProfile.css";

const TeacherProfile = ( ) => {
    const userId = 1;
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/teacher/${userId}`);
        console.log(response);
        setTeacher(response.data);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData(); // Call the function to fetch teacher data
  }, [userId]); // useEffect will re-run if teacherId changes

  if (!teacher) {
    return <div>Loading...</div>;
  }

  const { teacher_id, name, contact_no, email, password, dob, avatarUrl } = teacher;

  return (
    <div className="teacher-profile-container">
      <div className="profile-info">
        <h2>Teacher Profile</h2>
        <div>
          <strong>Teacher ID:</strong> {teacher_id}
        </div>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Contact Number:</strong> {contact_no || 'N/A'}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Password:</strong> {password}
        </div>
        <div>
          <strong>Date of Birth:</strong> {dob}
        </div>
      </div>
      <div className="avatar">
        <img src={avatarUrl} alt="Avatar" />
      </div>
    </div>
  );
};

export default TeacherProfile;
