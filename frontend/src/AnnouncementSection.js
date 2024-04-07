import React from 'react';
import Announcement from './Announcement'; // Assuming Announcement.js is in the same directory

const AnnouncementSection = ({ announcements }) => {
  return (
    <div>
      <h2>Announcements</h2>
      {announcements.map((announcement, index) => (
        <React.Fragment key={index}>
          <Announcement title={announcement.title} content={announcement.content} />
          {index !== announcements.length - 1 && <hr className="announcement-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnouncementSection;
