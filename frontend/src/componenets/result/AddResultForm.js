import React, { useState } from 'react';
import axios from 'axios';
import './AddResultForm.css'; // Import CSS file for styling

const AddResultForm = () => {
  const [formData, setFormData] = useState({
    roll_number: '',
    semester: '',
    subject1_result: '',
    subject2_result: '',
    subject3_result: '',
    subject4_result: '',
    subject5_result: '',
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const isValid =
      data.roll_number !== '' &&
      data.semester !== '' &&
      data.subject1_result !== '' &&
      data.subject2_result !== '' &&
      data.subject3_result !== '' &&
      data.subject4_result !== '' &&
      data.subject5_result !== '';
    setFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return; // Prevent form submission if not valid
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/addResult', formData);
      console.log('Result added successfully:', response.data);
      // You can add further actions here after successful submission
    } catch (error) {
      console.error('Error adding result:', error);
    }
  };

  return (
    <form className="add-result-form" onSubmit={handleSubmit}>
      <label htmlFor="roll_number">Roll Number:</label>
      <input
        type="text"
        id="roll_number"
        name="roll_number"
        value={formData.roll_number}
        onChange={handleChange}
        required
      />
      <label htmlFor="semester">Semester:</label>
      <input
        type="text"
        id="semester"
        name="semester"
        value={formData.semester}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject1_result">Subject 1 Result:</label>
      <input
        type="number"
        step="0.01"
        id="subject1_result"
        name="subject1_result"
        value={formData.subject1_result}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject2_result">Subject 2 Result:</label>
      <input
        type="number"
        step="0.01"
        id="subject2_result"
        name="subject2_result"
        value={formData.subject2_result}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject3_result">Subject 3 Result:</label>
      <input
        type="number"
        step="0.01"
        id="subject3_result"
        name="subject3_result"
        value={formData.subject3_result}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject4_result">Subject 4 Result:</label>
      <input
        type="number"
        step="0.01"
        id="subject4_result"
        name="subject4_result"
        value={formData.subject4_result}
        onChange={handleChange}
        required
      />
      <label htmlFor="subject5_result">Subject 5 Result:</label>
      <input
        type="number"
        step="0.01"
        id="subject5_result"
        name="subject5_result"
        value={formData.subject5_result}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={!formValid}>Submit</button>
    </form>
  );
};

export default AddResultForm;
