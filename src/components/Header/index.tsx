import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../../assets/icon.png';
import HamburgerImage from '../../assets/hamburger.png';
import CollapseImage from '../../assets/back.jpg';
import { ACTIVE_LINK_STYLE } from '../../utils/constant';
import { useAuth } from '../../contexts/AuthContext';
import useScreenSize from '../../hooks/useMediaQuery';
import './style.css';

const Header: React.FC = () => {
  const [isSidebarVisibile, setSidebarVisibility] = React.useState<boolean>(false);
  const location = useLocation();
  const { openAuthModal, isAuthenticated, handleAuthentication } = useAuth();
  const screenSize = useScreenSize();
  React.useEffect(() => {
    if(screenSize === 'lg'){
      setSidebarVisibility(false);
    }
  }, [screenSize]);
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };  
  const handleSidebar = () => {
    setSidebarVisibility(!isSidebarVisibile);
  }
  return (
    <div id='header-container'>
      <img src={Icon} alt="Logo" className={`${screenSize === 'sm' && 'small-logo'}`}/>
    { <div className={`flex gap-5 ${!isSidebarVisibile && screenSize !== 'lg' && 'hidden'} ${screenSize !== 'lg' && 'sidebar'}`}>
        <ul className='flex items-center text-white list-style-none gap-3'>
          <li className={`${!isSidebarVisibile && screenSize === 'lg' && 'hidden'}`}>
            <img src={CollapseImage} height={35} onClick={handleSidebar}/>
          </li>
          <li className='nav-item'>
            <NavLink 
              to={'/'} 
              className='link'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to={'/services'} 
              className='link' 
              // style={isLinkActive('/services') ? ACTIVE_LINK_STYLE : {}}
            >
              Services
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to={'/our-works'} 
              className='link'
            >
              Our Works
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to={'/packages'} 
              className='link' 
              style={ACTIVE_LINK_STYLE}>
              Packages
            </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink 
            to={'/blog'} 
            className='link'
          >
              Blog
            </NavLink>
          </li>
        {isAuthenticated &&  <li className='nav-item'>
          <NavLink 
            to={'/dashboard'} 
            className='link'
          >
              Dashboard
            </NavLink>
          </li>}
        </ul>
        {!isAuthenticated && <button id='auth-button' onClick={openAuthModal}>{`Login/Signup`}</button>}
      {isAuthenticated && <button id='auth-button' onClick={handleAuthentication}>{`Logout`}</button>}
      </div>}
      {screenSize !== 'lg' &&
      <img src={HamburgerImage} height={40} className={`mb-2 hamburger-icon ${isSidebarVisibile && 'hidden'}`} onClick={handleSidebar}/>}
    </div>
    
  );
};

export default Header;