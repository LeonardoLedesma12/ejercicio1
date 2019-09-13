import React from 'react';
import './Media.css';

function Media() {
  return (
    <div className='media'>
    <div className='media-container'>
      <div className='media-content'>
        <h1 className='media-t'>Media</h1>
        <div className='container-img'>
          <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
            className='img66' alt=''/>
          <div className='content-33'>
            <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
              className='img33' alt=''/>
            <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
              className='img33' alt=''/>
          </div>
        </div>
        <div className='container-img'>
          <div className='content-33'>
            <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
              className='img33' alt=''/>
            <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
              className='img33' alt=''/>
          </div>
          <img src='https://i.ytimg.com/vi/LgOs7ePx7Jc/maxresdefault.jpg'
            className='img66' alt=''/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Media;
