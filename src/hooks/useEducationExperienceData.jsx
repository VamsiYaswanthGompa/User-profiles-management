import { useState, useEffect } from 'react';

const STORAGE_KEY_EDU = 'userEducationData';
const STORAGE_KEY_EXP = 'userExperienceData';

const initialEducationData = {
  school: '',
  degree: '',
  course: '',
  year: '',
  grade: '',
  skills: '',
  projects: '',
};

const initialExperienceData = {
  domain1: '',
  subDomain1: '',
  experience1: '',
  domain2: '',
  subDomain2: '',
  experience2: '',
  linkedin: '',
  resume: '',
};

export const useEducationExperienceData = () => {
  const [educationData, setEducationData] = useState(initialEducationData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [isLoading, setIsLoading] = useState(true);
  const [isEduEditing, setIsEduEditing] = useState(false);
  const [isExpEditing, setIsExpEditing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storedEdu = localStorage.getItem(STORAGE_KEY_EDU);
        const storedExp = localStorage.getItem(STORAGE_KEY_EXP);
        if (storedEdu) setEducationData(JSON.parse(storedEdu));
        if (storedExp) setExperienceData(JSON.parse(storedExp));
        setIsLoading(false);
      } catch (e) {
        console.error("An error occurred during data loading:", e);
        setIsLoading(false);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY_EDU, JSON.stringify(educationData));
      localStorage.setItem(STORAGE_KEY_EXP, JSON.stringify(experienceData));
    }
  }, [educationData, experienceData, isLoading]);

  const handleEduChange = (e) => {
    setEducationData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleExpChange = (e) => {
    setExperienceData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const toggleEduEdit = () => setIsEduEditing(prev => !prev);
  const toggleExpEdit = () => setIsExpEditing(prev => !prev);

  useState(() => {
      setIsEduEditing(true);
      setIsExpEditing(true);
  });

  return { 
      education: { data: educationData, handleChange: handleEduChange, isEditing: isEduEditing, toggleEdit: toggleEduEdit },
      experience: { data: experienceData, handleChange: handleExpChange, isEditing: isExpEditing, toggleEdit: toggleExpEdit },
      isLoading,
  };
};