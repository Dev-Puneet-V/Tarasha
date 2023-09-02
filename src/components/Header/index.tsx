import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../../assets/icon.png';
import { ACTIVE_LINK_STYLE } from '../../utils/constant';
import './style.css';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { openAuthModal } = useAuth();
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };  

  return (
    <div id='header-container'>
      <img src={Icon} alt="Logo" />
      <div className='flex gap-5'>
        <ul className='flex items-center text-white list-style-none gap-3'>
          <li className='nav-item'>
            <NavLink to={'/'} className='link' style={isLinkActive('/') ? ACTIVE_LINK_STYLE : {}}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/services'} className='link' style={isLinkActive('/services') ? ACTIVE_LINK_STYLE : {}}>
              Services
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/our-works'} className='link' style={isLinkActive('/our-works') ? ACTIVE_LINK_STYLE : {}}>
              Our Works
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={'/packages'} className='link' style={isLinkActive('/packages') ? ACTIVE_LINK_STYLE : {}}>
              Packages
            </NavLink>
          </li>
          <li className='nav-item'>Blog</li>
        </ul>
        <button id='auth-button' onClick={openAuthModal}>Login/Signup</button>
      </div>
    </div>
  );
};

export default Header;