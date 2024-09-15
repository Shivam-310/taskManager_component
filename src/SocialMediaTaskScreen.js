import React, { useState } from 'react';
import './SocialMediaTaskScreen.css';

const tasks = [
  { id: 1, name: 'Post on Instagram', description: 'Create a new post', status: 'in-progress' },
  { id: 2, name: 'Schedule Facebook Post', description: 'Schedule for next week', status: 'completed' },
  // Additional tasks...
];

const SocialMediaTaskScreen = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="task-screen">
      <header className="screen-header">
        <h1>Social Media Task Management</h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
      </header>
      <div className="task-overview">
        {tasks.map(task => (
          <div className="task-card" key={task.id} onClick={() => setSelectedTask(task)}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <span className={`task-status ${task.status}`}>{task.status.replace('-', ' ')}</span>
          </div>
        ))}
      </div>
      {selectedTask && (
        <div className="task-details">
          <h2>{selectedTask.name}</h2>
          <p>{selectedTask.description}</p>
          <button onClick={() => setSelectedTask(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SocialMediaTaskScreen;
