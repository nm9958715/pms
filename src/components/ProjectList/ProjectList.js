import React, { useState } from 'react';
import './ProjectList.css';
import CreateNewProject from './CreateNewProject'; // Import CreateNewProject
import ModifyProjectList from './ModifyProjectList'; // Import ModifyProjectList

const ProjectList = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showModifyDialog, setShowModifyDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to toggle create dialog visibility
  const toggleCreateDialog = () => {
    setShowCreateDialog(!showCreateDialog);
  };

  // Function to toggle modify dialog visibility and set selected project
  const toggleModifyDialog = (project) => {
    setSelectedProject(project);
    setShowModifyDialog(!showModifyDialog);
  };

   // Function to handle delete action
   const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete the project?');
    if (confirmed) {
      // Delete the row or perform deletion logic here
      console.log('Project deleted');
    }
  };

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th style={{ width: '25px' }}>Proj ID</th>
            <th style={{ width: '20%' }}>Proj Name</th>
            <th style={{ width: '30px' }}>Proj Tech</th>
            <th style={{ width: '12%' }}>Start</th>
            <th style={{ width: '12%' }}>Target</th>
            <th  style={{ width: '30%' }}>Description</th>
            <th  style={{ width: '20px' }}>Days</th>
            <th  style={{ width: '10%' }}>Lead</th>
            <th  style={{ width: '5%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Project A</td>
            <td>React, Node.js</td>
            <td>2024-02-01</td>
            <td>2024-03-15</td>
            <td>Project A 
            </td>
            <td>23</td>
            <td>Amar Singh</td>
            <td>
              <button id="ModifyAction" className="modify-btn" onClick={() => toggleModifyDialog({ id: 1, projectName: 'Project A', technology: 'React, Node.js', startDate: '2024-02-01', targetDate: '2024-03-15', description: 'Project A description' })}>
                <span id="smallbtn" className="material-icons">edit</span>
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                <span id="smallbtn" className="material-icons">delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="center-align">
        <button className="create-btn" onClick={toggleCreateDialog}>
          <span id="new-proj-icon" className="material-icons">add_circle</span>
          &nbsp;&nbsp;Create New Project
        </button>
      </div>
      {/* Render CreateNewProject modal if showCreateDialog is true */}
      {showCreateDialog && <CreateNewProject onClose={toggleCreateDialog} />}
      {/* Render ModifyProjectList modal if showModifyDialog is true */}
      {showModifyDialog && <ModifyProjectList projectData={selectedProject} onClose={toggleModifyDialog} />}
    </div>
  );
};

export default ProjectList;
