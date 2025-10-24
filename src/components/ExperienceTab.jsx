import { useEducationExperienceData } from '../hooks/useEducationExperienceData';
import { FormInput, FormSelect, LoadingState } from './FormComponents'; // Assuming reusable components are centralized

function ExperienceTab() {
  const { experience, isLoading } = useEducationExperienceData();
  const { data, handleChange, isEditing, toggleEdit } = experience;
  const disabled = !isEditing;

  if (isLoading) return <LoadingState message="Loading Experience Details..." />;

  const handleSave = () => {
    toggleEdit(); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      
      {/* Work Experience Section */}
      <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
            <button 
                onClick={isEditing ? handleSave : toggleEdit}
                className={`p-2 rounded-full transition-colors duration-150 ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-violet-600 hover:text-violet-800 hover:bg-violet-50'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

            </button>
          </div>

          
          <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormInput label="Domain" name="domain1" placeholder="e.g. Technology" value={data.domain1} onChange={handleChange} disabled={disabled} w="col-span-3 md:col-span-1" />
                  <FormInput label="Sub-domain" name="subDomain1" placeholder="e.g. MERN Stack" value={data.subDomain1} onChange={handleChange} disabled={disabled} w="col-span-2 md:col-span-1" />
                  <FormSelect label="Experience" name="experience1" value={data.experience1} onChange={handleChange} disabled={disabled} w="col-span-1 md:col-span-1">
                      <option value="">Select an option</option>
                      <option value="1">1 year</option>
                  </FormSelect>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormInput label="Domain" name="domain2" placeholder="e.g. Technology" value={data.domain2} onChange={handleChange} disabled={disabled} w="col-span-3 md:col-span-1" />
                  <FormInput label="Sub-domain" name="subDomain2" placeholder="e.g. MERN Stack" value={data.subDomain2} onChange={handleChange} disabled={disabled} w="col-span-2 md:col-span-1" />
                  <FormSelect label="Experience" name="experience2" value={data.experience2} onChange={handleChange} disabled={disabled} w="col-span-1 md:col-span-1">
                      <option value="">Select an option</option>
                      <option value="1">1 year</option>
                  </FormSelect>
              </div>
          </div>
      </div>

      {/* LinkedIn and Resume Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
                  <button onClick={isEditing ? handleSave : toggleEdit} className={`p-2 rounded-full ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-purple-600 hover:bg-purple-50'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                  </button>
              </div>
              <FormInput label="Profile URL" name="linkedin" placeholder="linkedin.com/in/mrbean" value={data.linkedin} onChange={handleChange} disabled={disabled} w="col-span-full" />
          </div>

          {/* Resume Card */}
          <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Resume</h3>
                  <button onClick={isEditing ? handleSave : toggleEdit} className={`p-2 rounded-full ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-purple-600 hover:bg-purple-50'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>

                  </button>
              </div>
              <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {data.resume}
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-violet-500 bg-violet-200 rounded-md hover:bg-purple-5" disabled={disabled}>
                      View
                  </button>
              </div>
          </div>
      </div>

    </div>
  );
}

export default ExperienceTab;