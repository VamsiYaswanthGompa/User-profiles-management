import React, { useState } from 'react';
import Navbar from './Navbar';
import BasicInfoTab from './BasicInfoTab'; 
import EducationSkillsTab from './EducationSkillsTab';
import ExperienceTab from './ExperienceTab';
// EducationSkillsTab and ExperienceTab would be imported here

const userData = {
  name: 'Dave Richards',
  email: 'dave@mail.com',
  contact: '+91 8332883854',
};

function ProfilePage({ user}) {
  const [activeTab, setActiveTab] = useState('basicInfo'); 

  const renderContent = () => {
    switch (activeTab) {
      case 'basicInfo':
        // Ensure you pass the initial modal data down to the Basic Info tab
        return <BasicInfoTab initialModalData={user} />;
      case 'educationSkills':
        // Render the Education & Skills tab
        return <EducationSkillsTab />;
      case 'experience':
        // Render the Experience tab
        return <ExperienceTab />;
      default:
        return <BasicInfoTab initialModalData={user} />;
    }
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 
        ${activeTab === id
          ? 'bg-purple-100 text-purple-700 border-b-2 border-purple-700' 
          : 'text-gray-600 hover:bg-gray-50'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar goes here */}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Header Card (Matches image) */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-purple-400">
          <div className="flex items-center">
            {/* Profile Picture Placeholder */}
            <div className="w-24 h-24 mr-6 flex items-center justify-center rounded-full bg-purple-50 ring-4 ring-purple-100">
              <svg className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* User Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.contact}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-gray-200 mb-6">
          <TabButton id="basicInfo" label="Basic info" />
          <TabButton id="educationSkills" label="Education & skills" />
          <TabButton id="experience" label="Experience" />
        </div>

        {/* Content Area */}
        {renderContent()}
        
      </div>
    </div>
  );
}

export default ProfilePage;