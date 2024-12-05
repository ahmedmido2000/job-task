import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGear,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
} from '@fortawesome/free-regular-svg-icons';

const NavBar = ({ toggleSidebar }) => {
  return (
    <div className='d-flex align-items-center gap-md-5 gap-2'>
        <FontAwesomeIcon icon={faBars} size="1x" onClick={toggleSidebar} />
        <img src='./person2.jpg' className='rounded-circle' style={{width:"30px",minWidth:"30px", height: "30px"}}/>
        <FontAwesomeIcon icon={faBell} size="1x" />
        <FontAwesomeIcon icon={faGear} size="1x" />
        
        {/* Search input with icon inside */}
        <div className="position-relative w-100">
          <input 
            className='form-control pl-5' 
            placeholder="Search..."
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            size="1x" 
            className="position-absolute"
            style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
          />
        </div>
    </div>
  )
}

export default NavBar;
