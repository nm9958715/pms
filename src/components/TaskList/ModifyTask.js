// ModifyTask.js
import React, { useState, useEffect } from 'react';
import './ModifyTask.css'; // Import the CSS file for ModifyTask component

const ModifyTask = ({ task, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [remark, setRemark] = useState('');
  const [status, setStatus] = useState('');

  // Set initial values of state based on task data
  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setResponsibility(task.responsibility);
      setDeadline(task.deadline);
      setDescription(task.description);
      setRemark(task.remark);
      setStatus(task.status);
    }
  }, [task]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
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

  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or update state
    console.log("Submitted task details:", { taskName, responsibility, deadline, description, remark, status });
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="center">Modify Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
          <label>Responsibility:</label>
          <input type="text" value={responsibility} onChange={handleResponsibilityChange} />
          <label>Deadline:</label>
          <input type="date" value={deadline} onChange={handleDeadlineChange} />
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
          <label>Remark:</label>
          <input type="text" value={remark} onChange={handleRemarkChange} />
          <div>
            <label>Status:</label>
            <input type="radio" value="Ongoing" checked={status === 'Ongoing'} onChange={handleStatusChange} /> Ongoing
            <input type="radio" value="Completed" checked={status === 'Completed'} onChange={handleStatusChange} /> Completed
          </div>
          <div className="button-container">
            <button type="submit" className="submit-btn">Modify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyTask;
