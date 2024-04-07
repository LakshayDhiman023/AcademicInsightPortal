import React from 'react';

const UserProfile = ({ user }) => {
  const { course, dob, email, contact } = user;

  return (
    <div className="user-profile">
      <div className="user-info">
        <p className="user-details">
          <strong>Course</strong> <br /> {course}
        </p>
        <p className="user-details">
          <strong>Date of Birth</strong> <br /> {dob}
        </p>
        <p className="user-details">
          <strong>Email</strong> <br /> {email}
        </p>
        <p className="user-details">
          <strong>Contact</strong> <br /> {contact}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
