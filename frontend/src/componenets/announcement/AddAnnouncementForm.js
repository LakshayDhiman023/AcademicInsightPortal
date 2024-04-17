import React, { useState } from 'react';
import axios from 'axios';
import './AddAnnouncementForm.css'; // Import the external CSS file

const AddAnnouncementForm = () => {
  const [announcementData, setAnnouncementData] = useState({
    notice_id: '',
    description: '',
    date: '',
    time: '',
    title: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData({ ...announcementData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/addAnnouncement", announcementData);
      console.log(response.data);
      setAnnouncementData({ ...announcementData, notice_id: response.data.notice_id });
      setErrorMessage('');
      setSuccessMessage('New announcement added successfully.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to add announcement. Please try again.');
    }
  };

  const validateForm = () => {
    const { notice_id, description, date, time, title } = announcementData;
    return notice_id.trim() !== '' && description.trim() !== '' && date.trim() !== '' && time.trim() !== '' && title.trim() !== '';
  };

  return (
    <div className="add-announcement-form-container">
      <h2>Add Announcement</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="notice_id">Notice ID</label>
          <input
            type="text"
            id="notice_id"
            name="notice_id"
            value={announcementData.notice_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={announcementData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={announcementData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={announcementData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={announcementData.time}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAnnouncementForm;
