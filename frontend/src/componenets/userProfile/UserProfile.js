import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UserProfile = () => {
  const [user, setUser] = useState({});
  const { course, dob, email, contact_no } = user;


  useEffect(()=>{
    let id = 2;
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${id}`);
        // console.log(response);
        setUser(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [])
  return (
    <div className="user-profile">
      <div className="user-info">
        <p className="user-details">
          <strong>Course</strong> <br /> {course}
        </p>
        <p className="user-details">
          <strong>Date of Birth</strong> <br /> {dob == undefined? 0:dob.slice(0, 10)}
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
