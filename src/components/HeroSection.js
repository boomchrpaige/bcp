import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../../videos/Above_London_Video_Edit_Smooth.mp4' autoPlay loop muted />
            <h1>MEMBRANES 12" VINYL</h1>
            <h3>Ambient Electronic Listening Music</h3>
            <p>"[Boom chr Paige] employs ethereal 
                and magnificently immersive soundscapes 
                to convey a wide scale of thoughts and 
                emotions, from uncertainty and naive 
                optimism to devastating trauma and 
                bewilderment." - EXCLUSIVE MAGAZINE 2021
            </p>
            <p>"It’s certainly a welcome escape, 
                evoking the dreamlike feeling of 
                flying high above the clouds. - STITCHED SOUND 2021
            </p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn-large'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://boomchrpaige.bandcamp.com/album/membranes';
                        }}
                    >
                        PURCHASE VINYL
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn-large'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://open.spotify.com/album/2XuSMFWYpsSxJxzHXDbOPH?si=_cEMuMA-QBWwrtvbZ72QjQ&dl_branch=1';
                        }}
                    >
                        LISTEN ON SPOTIFY <i className='far fa-play-circle' />
                </Button>
                
            </div>
            <div>
      </div>
        </div>
    )
}

export default HeroSection;
