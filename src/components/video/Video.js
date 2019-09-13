import React from 'react';
import './Video.css';
import video from '../../assets/video.mp4';

function Video() {
  return (
    <div className='video'>
          <video
            src={video} autoplay='autoplay' loop='loop' muted='true'
            style={{ width: '100%', height: '100%' }}
          />
          <div className='container-video'>
            <div className='content-video'>
              <div className='colum'>
                <h1 className='title-size'>Nombre del Juego</h1>
                <p className='trailer-size'>Ver trailer completo</p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Video;
