import React from 'react';
import Nav from './components/navbar/Nav';
import Video from './components/video/Video';
import Launch from './components/launch/Launch';
import Media from './components/media/Media';
import Bio from './components/bio/Bio';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
      <div className="background_color">
      <Nav/>
      <Video/>
      <Launch/>
      <Media/>
      <Bio/>
      <Contact/>
      </div>
  );
}

export default App;
