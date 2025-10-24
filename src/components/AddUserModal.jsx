import { useState } from 'react';
const MODAL_WIDTH = 'w-1/2'; 

function AddUserModal({ isOpen, onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', email: '', contact: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleAddClick = () => {
    if (form.name && form.email) {
        onAdd(form);
    } else {
        alert("Please enter Name and E-mail.");
    }
  };

  const panelClass = isOpen 
    ? `translate-x-0` 
    : `translate-x-full`;

  return (
    <div
      className={`fixed inset-y-0 right-0 ${MODAL_WIDTH} bg-white shadow-2xl z-50 
                  transform transition-transform duration-300 ease-in-out ${panelClass}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-user-title"
      style={{ display: isOpen || panelClass !== 'translate-x-full' ? 'block' : 'none' }}
    >
      <div className="h-full flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-blue-200 shadow-lg h-24">
          <h2 id="add-user-title" className="text-xl font-semibold text-gray-800">
            Add User
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name of the user</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={form.name} placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400" />
          </div>
          
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">E-mail</label>
              <input type="email" id="email" name="email" onChange={handleChange} value={form.email} placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400" />
            </div>
            <div className="w-1/2">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-500">Contact</label>
              <input type="text" id="contact" name="contact" onChange={handleChange} value={form.contact} placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500  placeholder-gray-400" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t flex justify-end gap-2 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleAddClick}
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;