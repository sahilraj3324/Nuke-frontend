import React, { useState } from 'react';
import Profile from '../user/Profile';
import Repocreation from '../repo/Repocreation';
import {Dashboard} from '../dashboard/Dashboard'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isOpen, setIsOpen] = useState(false);
  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Profile':
        return <Profile />;
      case 'Repocreation':
        return <Repocreation />;
      case 'Settings':
        return <Settings />;
      case 'Logout':
        return <Logout />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div className={`w-64 h-screen p-10 text-white  md:block ${isOpen ? 'block' : 'hidden'}`}>
        <h2 className="text-xl font-semibold mb-6">Sidebar Title</h2>
        <ul>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === 'Dashboard' ? 'text-white' : 'text-gray-300'}`}
              onClick={() => {
                setActiveTab('Dashboard');
                setIsOpen(false); // Close sidebar on mobile
              }}
            >
              Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === 'Profile' ? 'text-white' : 'text-gray-300'}`}
              onClick={() => {
                setActiveTab('Profile');
                setIsOpen(false);
              }}
            >
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === 'Repocreation' ? 'text-white' : 'text-gray-300'}`}
              onClick={() => {
                setActiveTab('Repocreation');
                setIsOpen(false);
              }}
            >
              Repo Creation
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === 'Settings' ? 'text-white' : 'text-gray-300'}`}
              onClick={() => {
                setActiveTab('Settings');
                setIsOpen(false);
              }}
            >
              Settings
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === 'Logout' ? 'text-white' : 'text-gray-300'}`}
              onClick={() => {
                setActiveTab('Logout');
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
       
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Sidebar;
