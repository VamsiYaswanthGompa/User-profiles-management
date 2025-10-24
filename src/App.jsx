
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import UsersTable from './components/UsersTable.jsx';
import AddUserModal from './components/AddUserModal.jsx';
import ProfilePage from './components/ProfilePage.jsx';

// Mock data structure for the new user profile
const mockNewUser = {
  name: '', // Will be updated from modal
  email: '', // Will be updated from modal
  contact: '', // Will be updated from modal
};
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [view, setView] = useState('profile'); // 'dashboard' or 'profile'
  const [currentProfile, setCurrentProfile] = useState(null); // Data of the user being viewed

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddUser = (newUserData) => {
    // 1. Close the modal
    handleCloseModal();
  
      const updatedUser = { 
        ...mockNewUser, 
        name: newUserData.name, 
        email: newUserData.email, 
        contact: newUserData.contact 
    };
    setCurrentProfile(updatedUser);
    
    // 3. Change the view to the Profile Page (Basic Info Tab)
    setView('profile'); 
  };
  // ==========================================================

  // If we are on the profile view, render the ProfilePage
  if (view === 'profile' && currentProfile) {
    // Pass the user data down to the ProfilePage
    return <ProfilePage user={currentProfile} />;
  }
  

  return (
    
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navbar Component */}
      <Navbar />
      <div className="relative">
        <main className="p-6 md:p-10 lg:p-12">
          {/* Users Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-500">Users</h1>
            <button 
            onClick={handleOpenModal}
            className="flex items-center px-4 py-2 bg-violet-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add user
            </button>
          </div>

          {/* Users Table Component */}
          <UsersTable />
        </main>
      </div> 
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-40"
          // Use an inline style to set a guaranteed semi-transparent black background
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity:'50'}}
          onClick={handleCloseModal}
          aria-hidden="true"
        />
      )}

      <AddUserModal isOpen={isModalOpen} onClose={handleCloseModal} onAdd={handleAddUser}/>
    </div>
  );
}

export default App;