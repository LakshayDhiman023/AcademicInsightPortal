import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userLogo from '../../images/logo.jpg';
const UserProfile = () => {
  const [user, setUser] = useState({});
  const { name = "Dhruv Bhalodia", course = "Computer Science", dob = "2nd April 2005", email = "dhruv123@gmail.com", contact_no = "123456789"} = user;


  useEffect(() => {
    let id = 2;
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${id}`);
        setUser(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [])
  return (

    <div className="user-profile">
      <div className="user-profile-section">
        <div className="user-image">
          <img src={userLogo} />
        </div>
        <div className="user-details">
          <h2 className="user-name">{name}</h2>
        </div>
      </div>
      <div className="user-info">
        <p className="user-details">
          <strong>Course</strong> <br /> {course}
        </p>
        <p className="user-details">
          <strong>Date of Birth</strong> <br /> {dob == undefined ? 0 : dob.slice(0, 10)}
        </p>
        <p className="user-details">
          <strong>Email</strong> <br /> {email}
        </p>
        <p className="user-details">
          <strong>Contact</strong> <br /> {contact_no}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
