import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import RightMain from './components/Main/RightMain/RightMain';
import LeftMain from './components/Main/LeftMain/LeftMain';
function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="App" dir="rtl">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div
            className={`col-lg-3 border h-100 sidebar-container ${
              sidebarVisible ? "d-block" : "d-none d-lg-block"
            }`}
            onClick={(e) => {
              // Prevent closing if clicking inside the sidebar content
              if (e.target.closest(".sidebar-content")) return;
              setSidebarVisible(false);
            }}
          >
            <div className="sidebar-content">
              <SideBar toggleSidebar={toggleSidebar} />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 border h-100">
            <div className="shadow-sm p-3">
              <NavBar toggleSidebar={toggleSidebar} />
            </div>
            <div className="row mt-5 p-4">
              <div className="col-md-6">
                <RightMain />
              </div>
              <div className="col-md-6">
                <LeftMain />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
