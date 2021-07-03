import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              boomchrpaige
            </Link>
          </div>
          <small class='website-rights'>©2021 Boom chr Paige</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/seriousboom'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/boom.chr.paige/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCFDi6BAMzEgt2Y5Qs2HVJMQ'
              target='_blank'
              rel='noreferrer'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/boomchrpaige'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link soundcloud'
              href='https://soundcloud.com/boomchrpaige'
              target='_blank'
              rel='noreferrer'
              aria-label='SoundCloud'
            >
              <i class='fab fa-soundcloud' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
