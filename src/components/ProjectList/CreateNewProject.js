import React, { useState } from 'react';
import './CreateNewProject.css';

const CreateNewTask = ({ onClose }) => {
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
    const newTask = {
      taskName,
      projectName,
      responsibility,
      deadline,
      description
    };
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="center">
          Create New Task 
          
        </h2>
        <form onSubmit={handleSubmit}>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
          <label>Project Name:</label>
          <input type="text" value={projectName} onChange={handleProjectNameChange} />
          <label>Responsibility:</label>
          <input type="text" value={responsibility} onChange={handleResponsibilityChange} />
          <label>Deadline:</label>
          <input type="date" value={deadline} onChange={handleDeadlineChange} />
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
          <div className="button-container">
            <button type="submit" className="submit-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
