import { useState, useEffect } from 'react';

const STORAGE_KEY = 'useProfileData';

const defaultStructure = {
  firstName: '',
  lastName: '',
  email: '',
  yearOfBirth: '',
  gender: '',
  phoneNumber: '',
  alternatePhone: '',
  address: '',
  pincode: '',
  domicileState: '',
  domicileCountry: '',
};

export const useProfileData = (initialModalData = {}) => {
  const initialProfileState = { 
      ...defaultStructure, 
      firstName: initialModalData.name || defaultStructure.firstName,
      email: initialModalData.email || defaultStructure.email,
      phoneNumber: initialModalData.contact || defaultStructure.phoneNumber,
  };

  const [data, setData] = useState(initialProfileState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
          setData(JSON.parse(storedData));
        }
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to load profile data:", e);
        setError("Could not load data.");
        setIsLoading(false);
      }
    }, 500);
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleEdit = () => setIsEditing(prev => !prev);
  const handleSubmit = () => { toggleEdit(); };

  return { data, isLoading, error, isEditing, toggleEdit, handleChange, handleSubmit };
};