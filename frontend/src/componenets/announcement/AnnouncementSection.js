import React, { useEffect, useState } from 'react';
import Announcement from './Announcement'; // Assuming Announcement.js is in the same directory
import axios from 'axios'

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);
  const rollNumber = 1;
  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/announcement");
        // console.log(response.data);
        setAnnouncements(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [])
  return (
    <div>
      <h2>Announcements</h2>
      {announcements.map((announcement, index) => (
        <React.Fragment key={index}>
          <Announcement title={announcement.title} content={announcement.description} />
          {index !== announcements.length - 1 && <hr className="announcement-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnouncementSection;
