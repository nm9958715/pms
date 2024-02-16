import React, { useState } from 'react';
import './TaskList.css'; // Import the CSS file for TaskList component
import AddNewTask from './Addnewtask'; // Import the AddNewTask component
import ModifyTask from './ModifyTask'; // Import the ModifyTask component

const TaskList = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showModifyTaskModal, setShowModifyTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // State to hold the selected task data
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task A", responsibility: "Mukesh", deadline: "2024-02-28", description: "Task A description", status: "In Progress", remark: "Remark for Task A" },
    // Add more task data as needed
  ]);

  const openAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const closeAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  const openModifyTaskModal = (task) => {
    setSelectedTask(task); // Set the selected task data
    setShowModifyTaskModal(true);
  };
  
  const closeModifyTaskModal = () => {
    setShowModifyTaskModal(false);
  };

  // Function to handle deletion of a task
  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Responsibility</th>
            <th>Deadline</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {/* Populate table rows with tasks */}
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.responsibility}</td>
              <td>{task.deadline}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button className="modify-btn" onClick={() => openModifyTaskModal(task)}>
                  <span id="smallbtn" className="material-icons">edit</span>
                </button>
                <button className="delete-btn" onClick={handleDeleteTask}>
                  <span id="smallbtn" className="material-icons">delete</span>
                </button>
              </td>
              <td>{task.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="center-align">
        <button className="add-task-btn" onClick={openAddTaskModal}>
          <span id="addbtn" className="material-icons">add_task</span>
          &nbsp;&nbsp;Add Task
        </button>
      </div>
      {/* Render AddNewTask modal if showAddTaskModal is true */}
      {showAddTaskModal && <AddNewTask onClose={closeAddTaskModal} />}
      {/* Render ModifyTask modal if showModifyTaskModal is true */}
      {showModifyTaskModal && <ModifyTask task={selectedTask} onClose={closeModifyTaskModal} />}
    </div>
  );
};

export default TaskList;
