import React from 'react';
import './styles/App.css';
import { Button } from './Button';
import './styles/SlideShow.css';


function SlideShow() {
  return (
    <div>
      <div className='slideShow-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Snow Vacations</h1>
        <p>What are you waiting for?</p>
        <div className="slideShow-btns">
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Get Started
          </Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            Watch Trailer
            <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </div>
  )
};

export default SlideShow;
