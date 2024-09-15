import React from 'react';
import './SocialMediaTaskDesign.css';

const SocialMediaTaskDesign = () => {
  return (
    <div className="task-design">
      <header className="task-header">
        <h1 className="task-title">Social Media Tasks</h1>
        <button className="add-task-button">Add Task</button>
      </header>
      <div className="task-cards">
        <div className="task-card">
          <h2 className="task-name">Post on Instagram</h2>
          <p className="task-description">Create and publish a new post on Instagram.</p>
          <span className="task-status in-progress">In Progress</span>
        </div>
        <div className="task-card">
          <h2 className="task-name">Schedule Facebook Post</h2>
          <p className="task-description">Schedule a post for Facebook next week.</p>
          <span className="task-status completed">Completed</span>
        </div>
        {/* Add more tasks as needed */}
      </div>
    </div>
  );
};

export default SocialMediaTaskDesign;
