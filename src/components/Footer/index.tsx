import React from 'react'
import IconImage from '../../assets/icon.png';
import FBSocialIcon from '../../assets/fb.png';
import InstaSocialIcon from '../../assets/insta.png';
import TwitterSocialIcon from '../../assets/twitter.png';
import './style.css';

const Footer: React.FC = () => {
  return (
    <div className='flex gap-5 wrap items-center  p-8 footer-container'>
      <div className='flex flex-col gap-1'>
        <img src={IconImage} alt='tarasha interiors' />
        <p className='pl-4 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className='flex flex-row gap-2 pl-4 mt-4'>
            <img src={FBSocialIcon} />
            <img src={InstaSocialIcon} />
            <img src={TwitterSocialIcon} />
        </div>
      </div>
      <div className='flex gap-4 wrap items-center justify-between info ml-8 mr-8 pl-8'>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Contact</h2>
        <p>Services</p>
        <p>Our Work</p>
        <p>Packages</p>
        <p>Blog</p>
      </div>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Contact</h2>
        <p>Services</p>
        <p>Our Work</p>
        <p>Packages</p>
        <p>Blog</p>
      </div>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Contact</h2>
        <p>Services</p>
        <p>Our Work</p>
        <p>Packages</p>
        <p>Blog</p>
      </div>
      </div>
    </div>
  )
}

export default Footer;
