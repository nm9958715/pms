// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import ProjectList from './ProjectList/ProjectList';
import ManageTeam from './ManageTeam/ManageTeam';
import TaskList from './TaskList/TaskList';
import About from './SidePanelBottom/About/About';

const Dashboard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Home');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  // Render different content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Project List':
        return <ProjectList />;
      case 'Manage Team':
        return <ManageTeam />;
      case 'Task List':
        return <TaskList />;
      default:
        return null;
    }
  };

  const openAbout = () => {
    setIsAboutOpen(true);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
  };



  return (
    <div className="dashboard">
      
      {/* Left Panel */}
      <div className="left-panel">
      
      {/* Header */}
      <div className="header">.</div>
        
        
      {/* Tabs */}
        <div className="tabs">
          <div className={`tab ${activeTab === 'Project List' ? 'active' : ''}`} onClick={() => handleTabClick('Project List')}>
            <span className="material-icons">fact_check</span>
            &nbsp;&nbsp;Project List
          </div>
          <div className={`tab ${activeTab === 'Manage Team' ? 'active' : ''}`} onClick={() => handleTabClick('Manage Team')}>
            <span className="material-icons">diversity_3</span>
            <span>&nbsp;&nbsp;Manage Team</span>
          </div>
          <div className={`tab ${activeTab === 'Task List' ? 'active' : ''}`} onClick={() => handleTabClick('Task List')}>
            <span className="material-icons">task_alt</span>
            <span>&nbsp;&nbsp;Task List</span>
          </div>
        </div>
        
        <div className="VerticalTabs">
          {/* Render "About," "Contact," "Update Profile," and "Logout" buttons */}
          <div>
            <button className="leftpanelbottom" onClick={openAbout}>
            <span id="addbtn" className="material-icons">info</span>
            &nbsp;&nbsp;&nbsp;&nbsp;About
            </button>
          </div>
          
          <div>
            <button className="leftpanelbottom">
              <span  id="addbtn" className="material-icons">edit</span>
              &nbsp;&nbsp;&nbsp;&nbsp;Update Profile
            </button>
          </div>
          <div>
            <button className="leftpanelbottom">
              <span  id="addbtn" className="material-icons">logout</span>
              &nbsp;&nbsp;&nbsp;&nbsp;Logout
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main">
        <div className="navbar">
          {/* Render clicked tab name centered */}
          <div className="centernametab" style={{ flex: '1', textAlign: 'center' }}>{activeTab}</div>
        </div>
        {/* Render different content based on active tab */}
        {renderContent()}
        {isAboutOpen && <About onClose={closeAbout} />}
      </div>
    </div>
  );
};

export default Dashboard;
