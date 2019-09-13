import React from 'react';
import Nav from './components/navbar/Nav';
import Video from './components/video/Video';
import Launch from './components/launch/Launch';
import './App.css';

function App() {
  return (
      <div className="background_color">
      <Nav/>
      <Video/>
      <Launch/>
      </div>
  );
}

export default App;
