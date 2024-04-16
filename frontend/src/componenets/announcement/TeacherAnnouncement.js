import React, { useState } from 'react';

function AnnouncementTable() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ]);
  return (
    <div className="announcement-table">
      <h2>Announcements</h2>
      <table>
        <thead>
          <tr>
            <th>Announcement ID</th>
            <th>Announcement Details</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement, index) => (
            <tr key={index}>
              <td>{announcement.id}</td>
              <td>{announcement.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnouncementTable;
