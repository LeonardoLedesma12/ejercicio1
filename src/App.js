import React from 'react';
import Nav from './components/navbar/Nav';
import Video from './components/video/Video';
import Launch from './components/launch/Launch';
import Media from './components/media/Media';
import './App.css';

function App() {
  return (
      <div className="background_color">
      <Nav/>
      <Video/>
      <Launch/>
      <Media/>
      </div>
  );
}

export default App;
