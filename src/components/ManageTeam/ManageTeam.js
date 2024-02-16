import React, { useState } from 'react';
import './ManageTeam.css'; // Import the CSS file for ManageTeam component
import ModifyMember from './ModifyMember'; // Import the ModifyMember component
import AddMember from './AddMember'; // Import the AddMember component

const ManageTeam = () => {
  const [showModifyMemberModal, setShowModifyMemberModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModifyMemberModal = (member) => {
    setSelectedMember(member);
    setShowModifyMemberModal(true);
  };

  const closeModifyMemberModal = () => {
    setShowModifyMemberModal(false);
  };

  const openAddMemberModal = () => {
    setShowAddMemberModal(true);
  };

  const closeAddMemberModal = () => {
    setShowAddMemberModal(false);
  };

  // Function to handle modification of the member
  const handleModifyMember = (updatedMember) => {
    // Implement the logic to update the member in your state or backend
    console.log("Modified member:", updatedMember);
    // Close the modal
    closeModifyMemberModal();
  };

  // Function to handle addition of a new member
  const handleAddMember = (newMember) => {
    // Implement the logic to add the new member in your state or backend
    console.log("Added new member:", newMember);
    // Close the modal
    closeAddMemberModal();
  };

  // Function to handle delete action
  const handleDelete = (member) => {
    const confirmed = window.confirm('Are you sure you want to delete the member?');
    if (confirmed) {
      // Implement logic to delete the member
      console.log('Member deleted:', member);
    }
  };

  return (
    <div className="content">
      {/* Table displaying team members */}
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>DOJ</th>
            <th>Experience</th>
            <th>Technology Known</th>
            <th>Project Working</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Populate table rows with team members */}
          <tr>
            <td>1</td>
            <td>Amar Singh</td>
            <td>01-01-2023</td>
            <td>1.2 years</td>
            <td>React, Node.js</td>
            <td>
              <div className="project-dropdown">
                <select>
                  <option value="Project A">---</option>
                  <option value="Project B">Project B</option>
                  <option value="Project C">Project C</option>
                </select>
              </div>
              <div className="project-dropdown">
                <select>
                  <option value="Project A">---</option>
                  <option value="Project B">Project B</option>
                  <option value="Project C">Project C</option>
                </select>
              </div>
              <div className="project-dropdown">
                <select>
                  <option value="Project A">---</option>
                  <option value="Project B">Project B</option>
                  <option value="Project C">Project C</option>
                </select>
              </div>
            </td>
            <td>
              {/* Button to trigger the modification */}
              <button className="modify-btn" onClick={() => openModifyMemberModal(selectedMember)}>
                <span id="smallbtn" className="material-icons">edit</span>
              </button>
              {/* Button to trigger the deletion */}
              <button className="delete-btn" onClick={() => handleDelete(selectedMember)}>
                  <span id="smallbtn" className="material-icons">delete</span>
              </button>
              <span className="lead-status"></span>
            </td>
          </tr>
          {/* Add more team member rows as needed */}
        </tbody>
      </table>
      {/* Buttons for adding a member and selecting a team lead */}
      <div className="center-align">
        <button className="add-member-btn" onClick={openAddMemberModal}>
          <span id="Add-member-butn" className="material-icons">person_add</span>
          &nbsp;&nbsp;Add Member
        </button>
        <button className="select-lead-btn">
          <span id="select-lead-butn"className="material-icons">stars</span>
          &nbsp;&nbsp;Select Team Lead
        </button>
      </div>
      {/* Render the ModifyMember modal if showModifyMemberModal is true */}
      {showModifyMemberModal && (
        <ModifyMember
          member={selectedMember}
          onClose={closeModifyMemberModal}
          onModifyMember={handleModifyMember}
        />
      )}
      {/* Render the AddMember modal if showAddMemberModal is true */}
      {showAddMemberModal && (
        <AddMember
          onClose={closeAddMemberModal}
          onAddMember={handleAddMember}
        />
      )}
    </div>
  );
};

export default ManageTeam;
