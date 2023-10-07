import React from 'react'
import IconImage from '../../assets/icon.png';
import FBSocialIcon from '../../assets/fb.png';
import InstaSocialIcon from '../../assets/insta.png';
import TwitterSocialIcon from '../../assets/twitter.png';
import './style.css';
import { useNavigate } from 'react-router-dom';
import useAnalyticsEventTracker from '../../hooks/useAnalyticsEventTracker';
const Footer: React.FC = () => {
  const navigate = useNavigate();
  const gaEventTracker = useAnalyticsEventTracker('Initial Page');
  return (
    <div className='flex gap-5 wrap  p-8 footer-container'>
      <div className='flex flex-col gap-1'>
        <img  src={IconImage} alt='tarasha interiors' />
        <p className='pl-4 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className='flex flex-row gap-2 pl-4 mt-4'>
            <img  src={FBSocialIcon} />
            <img  src={InstaSocialIcon} />
            <img  src={TwitterSocialIcon} />
        </div>
      </div>
      <div className='flex gap-4 wrap  justify-between info ml-8 mr-8 pl-8 m-f'>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>About</h2>
        <p onClick={() =>{ navigate('/'); gaEventTracker('Home', 'Navigating to home page')}}>Home page</p>
        <p onClick={() => {navigate('/services'); gaEventTracker('Services', 'Navigating to services page')}}>Services</p>
        <p onClick={() => {navigate('/our-works'); gaEventTracker('Works', 'Navigating to work page')}}>Before and After</p>
      </div>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Customer Support</h2>
        <p onClick={() => {navigate('/#faq'); gaEventTracker('FAQ', 'Checking frequently asked question')}}>FAQ</p>
        <p onClick={() =>{ navigate('/questionare'); gaEventTracker('Questionare', 'Checking questionare page')}}>Contact us</p>
      </div>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Explore</h2>
        <p onClick={() => {navigate('/packages'); gaEventTracker('Packages', 'Navigating to packages page')}}>Packages</p>
        <p onClick={() => {navigate('/blogs'); gaEventTracker('Blogs', 'Navigating to blog page')}}>Interior Design Blogs</p>
      </div>
      <div className='flex flex-col gap-3 pl-4 mt-4'>
        <h2>Aggrements</h2>
        <p onClick={() => {navigate('/terms-and-conditions'); gaEventTracker('Terms and Conditions', 'Navigating to terms and conditions page')}}>Terms and Condition</p>
        <p>Privacy Policy</p>
      </div>
      </div>
    </div>
    // <div className="footer">
    //       <p>Tarasha Interiors &copy;&nbsp; All Rights Reserved</p>
    //   </div>
  )
}

export default Footer;
