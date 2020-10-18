import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src="photo_2020-10-18_18-02-13.jpg"></img>
        <div className="flex-center">
        <i class="fab fa-instagram icon-3d"> sho_sho_show_uzh</i>
        <i class="fas fa-phone-volume icon-3d"> +380 66 003 28 38</i>
        </div>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      {/* </div> */}
    </div>
  );
}

export default HeroSection;