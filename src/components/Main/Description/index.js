import React from 'react';

export default function Description() {
  return (
    <section className='description'>
      <div className='description__icon'>
        <ul>
          <a className='description__icon-link' href='ddd'>
            <i className='fab fa-facebook-f'></i>
            <span>FACEBOOK</span>
          </a>
          <span className='description__icon-col'></span>
          <a className='description__icon-link' href='ddd'>
            <i className='fab fa-twitter'></i>
            <span>TWITTER</span>
          </a>
          <span className='description__icon-col hidden'></span>
          <a className='description__icon-link hidden' href='ddd'>
            <i className='fab fa-instagram'></i>
            <span>INSTAGRAM</span>
          </a>
          <span className='description__icon-col hide'></span>
          <a className='description__icon-link hide' href='ddd'>
            <i className='fab fa-google-plus-g'></i>
            <span>GOOGLE+</span>
          </a>
          <span className='description__icon-col hid'></span>
          <a className='description__icon-link hid' href='ddd'>
            <i className='fab fa-pinterest-p'></i>
            <span>PINTEREST</span>
          </a>
          <span className='description__icon-col hid'></span>
          <a className='description__icon-link hid' href='ddd'>
            <i className='fab fa-linkedin-in'></i>
            <span>LINKEDIN</span>
          </a>
        </ul>
      </div>
    </section>
  );
}
