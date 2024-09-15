import React, { useState } from 'react';
import './App.css';
import SocialMediaTaskDesign from './SocialMediaTaskDesign';
import SocialMediaTaskScreen from './SocialMediaTaskScreen';

const App = () => {
  const [view, setView] = useState('design'); // State to manage current view

  const toggleView = () => {
    setView((prevView) => (prevView === 'design' ? 'screen' : 'design'));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Social Media Task Manager</h1>
        <button className="toggle-view-button" onClick={toggleView}>
          {view === 'design' ? 'Switch to Task Screen' : 'Switch to Task Design'}
        </button>
      </header>
      <main className="app-main">
        {view === 'design' ? <SocialMediaTaskDesign /> : <SocialMediaTaskScreen />}
      </main>
    </div>
  );
};

export default App;
