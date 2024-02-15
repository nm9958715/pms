import React, { useState } from 'react';
import './AddMember.css'; 

const AddMember = ({ onClose, onAddMember }) => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [technology, setTechnology] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleTechnologyChange = (e) => {
    setTechnology(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { name, employeeId, technology };
    onAddMember(newMember);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="center">Add Member</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label>Employee ID:</label>
          <input type="text" value={employeeId} onChange={handleEmployeeIdChange} />
          <label>Technology:</label>
          <input type="text" value={technology} onChange={handleTechnologyChange} />
          <div className="button-container">
            <button type="submit" className="submit-btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
