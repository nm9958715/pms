import React, { useState } from 'react';

const ModifyProjectList = ({ projectData, onClose }) => {
  // State to hold modified project details
  const [modifiedProject, setModifiedProject] = useState({ ...projectData });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedProject({ ...modifiedProject, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update project details with modifiedProject
    console.log("Modified Project:", modifiedProject);
    onClose(); // Close the form after modification
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="center">Modify Project List</h2>
        <form onSubmit={handleSubmit}>
          <label>Project Name:</label>
          <input type="text" name="projectName" value={modifiedProject.projectName} onChange={handleInputChange} />
          <label>Technology:</label>
          <input type="text" name="technology" value={modifiedProject.technology} onChange={handleInputChange} />
          <label>Description:</label>
          <input type="text" name="description" value={modifiedProject.description} onChange={handleInputChange} />
          <label>Start Date:</label>
          <input type="date" name="startDate" value={modifiedProject.startDate} onChange={handleInputChange} />
          <label>Target Date:</label>
          <input type="date" name="targetDate" value={modifiedProject.targetDate} onChange={handleInputChange} />
          <div className="button-container">
            <button type="submit" className="modify-btn">Modify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyProjectList;
