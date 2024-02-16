import React, { useState } from 'react';
import './Addnewtask.css'; // Import the CSS file for AddNewTask component

const AddNewTask = ({ onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleResponsibilityChange = (e) => {
    setResponsibility(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or update state
    console.log("Submitted task name:", taskName);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="center">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Project Name:</label>
          <select value={projectName} onChange={handleProjectNameChange}>
            <option value="">---</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
            {/* Add more project options as needed */}
          </select>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
          <label>Responsibility:</label>
          <select value={responsibility} onChange={handleResponsibilityChange}>
            <option value="">---</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            {/* Add more responsibility options as needed */}
          </select>
          <label>Deadline:</label>
          <input type="date" value={deadline} onChange={handleDeadlineChange} />
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
          {/* Add more form fields as needed */}
          <div className="button-container">
            <button type="submit" className="submit-btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
