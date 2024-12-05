import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faEnvelopeOpen,
  faGraduationCap,
  faChevronDown,
  faChevronLeft,
  faBookOpen,
  faLayerGroup,
  faBriefcase,
  faUserGroup,
  faSuitcase,
  faBell,
  faWallet,
  faChartColumn
} from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = ({ toggleSidebar }) => {
  // States for all dropdowns
  const [isOpen, setIsOpen] = useState({ dropdown1: false, dropdown2: false, dropdown3: false });

  // Toggle function for individual dropdowns
  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

    const handleItemClick = (event) => {
    // Get all the bar-item divs
    const items = document.querySelectorAll('.bar-item');
    
    // Loop through all items and remove the 'active' class
    items.forEach(item => item.classList.remove('active'));

    // Add the 'active' class to the clicked item
    event.currentTarget.classList.add('active');
  };

  return (
    <div>
          <div className="d-flex justify-content-end p-2">
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="btn btn-light d-block d-lg-none"
          aria-label="Close Sidebar"
        >
          &times;
        </button>
      </div>
      <div className="d-flex gap-2 align-items-center p-3">
        <FontAwesomeIcon icon={faCirclePlay} size="3x" color="#493BD3" />
        <h2 className="m-0">أكاديمية ضوء</h2>
      </div>
      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faEnvelopeOpen} size="1x" />
        <h6 className="m-0 ">لوحة التحكم</h6>
      </div>
      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faGraduationCap} size="1x" />
        <h6 className="m-0 ">الأكاديمية</h6>
      </div>

      {/* First Dropdown */}
      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faBookOpen} size="1x" />
        <ul className="menu w-100">
          <li className={`menu-item w-100 ${isOpen.dropdown1 ? 'open' : ''}`}>
            <button
              className="dropdown-toggle p-0 d-flex justify-content-between align-items-center w-100 "
              onClick={() => toggleDropdown('dropdown1')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <h6 className="m-0 ">ادارة المحتوى</h6>
              <span
                className="text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ backgroundColor: '#0063FF', width:"20px", height: "20px" }}
              >
                3
              </span>
              <FontAwesomeIcon
                icon={isOpen.dropdown1 ? faChevronDown : faChevronLeft}
                style={{ marginLeft: '10px' }}
              />
            </button>
            {isOpen.dropdown1 && (
              <ul className="dropdown-menu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faLayerGroup} size="1x" />
        <h6 className="m-0 ">تصميم الأكاديمية</h6>
      </div>

      {/* Second Dropdown */}
      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faBriefcase} size="1x" />
        <ul className="menu w-100">
          <li className={`menu-item w-100 ${isOpen.dropdown2 ? 'open' : ''}`}>
            <button
              className="dropdown-toggle p-0 d-flex justify-content-between align-items-center w-100 "
              onClick={() => toggleDropdown('dropdown2')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <h6 className="m-0 ">حقائب الطلاب</h6>
              <FontAwesomeIcon
                icon={isOpen.dropdown2 ? faChevronDown : faChevronLeft}
                style={{ marginLeft: '10px' }}
              />
            </button>
            {isOpen.dropdown2 && (
              <ul className="dropdown-menu">
                <li>Student 1</li>
                <li>Student 2</li>
                <li>Student 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faUserGroup} size="1x" />
        <h6 className="m-0 ">إدارة الموظفين</h6>
      </div>

      {/* Third Dropdown */}
      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faSuitcase} size="1x" />
        <ul className="menu w-100">
          <li className={`menu-item w-100 ${isOpen.dropdown3 ? 'open' : ''}`}>
            <button
              className="dropdown-toggle p-0 d-flex justify-content-between align-items-center w-100 "
              onClick={() => toggleDropdown('dropdown3')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <h6 className="m-0 ">التسويق</h6>
              <FontAwesomeIcon
                icon={isOpen.dropdown3 ? faChevronDown : faChevronLeft}
                style={{ marginLeft: '10px' }}
              />
            </button>
            {isOpen.dropdown3 && (
              <ul className="dropdown-menu">
                <li>Exam 1</li>
                <li>Exam 2</li>
                <li>Exam 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faBell} size="1x" />
        <h6 className="m-0 ">بث مباشر</h6>
      </div>

      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item active" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faWallet} size="1x" />
        <h6 className="m-0 ">المحفظة</h6>
      </div>

      <div className="d-flex gap-2 align-items-center p-3 mt-2 bar-item" onClick={handleItemClick}>
        <FontAwesomeIcon icon={faChartColumn} size="1x" />
        <h6 className="m-0 ">التقارير والإحصائيات</h6>
      </div>

      <div className="p-4 mt-2 mx-md-4 extra-features">
        <h5 className="text-center text-white">احصل على ميزات اضافية عبر الباقة الاحترافية</h5>
        <div className="btn text-white mt-2 py-2 px-5 rounded-pill hovers" style={{ backgroundColor: "#00D5EA" }}>
          ترقية
        </div>
        <img src="./rocket.png" className="position-absolute" />
      </div>
    </div>
  );
};

export default SideBar;
