import App from '../App';
import './Banner.css';
import React from 'react';

function Banner() {

  return (
    <div className='banner-container'>
        <img className='banner-img' src='/images/ford-ranger-1.jpg' />
        <h1>Welcome to G Automotive</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum mauris id dignissim consectetur. Duis luctus congue purus, in tristique nisl auctor in. Sed rutrum faucibus sodales. Suspendisse hendrerit aliquam dolor eget facilisis. Praesent sagittis massa massa, ac ultricies dui blandit id. Proin commodo velit vel suscipit faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse luctus fermentum tristique. Vestibulum ultrices, lacus eget feugiat feugiat, nulla magna hendrerit magna, a scelerisque ex augue vitae arcu. Donec ut nulla tortor.</p>
        <div>
          <a href="https://www.dealerstudio.com.au/contact">
            <button className='banner-button'>Contact Us</button>
          </a>
        </div>

        
    </div>
  );
};

export default Banner;