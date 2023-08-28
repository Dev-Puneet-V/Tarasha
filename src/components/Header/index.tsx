import React from 'react'
import Icon from '../../assets/icon.png';
import './style.css';

const Header: React.FC = () => {
  return (
    <div id='header-container'>
      <img src={Icon}/>
      <div className='flex gap-5'>
        <ul className='flex items-center text-white list-style-none gap-3'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Services</li>
            <li className='nav-item'>Our Works</li>
            <li className='nav-item nav-active'>Packages</li>
            <li className='nav-item'>Blog</li>
        </ul>
        <button id='auth-button'>Login/Signup</button>
      </div>
    </div>
  )
}

export default Header;
