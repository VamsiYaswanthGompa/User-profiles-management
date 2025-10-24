import { useEducationExperienceData } from '../hooks/useEducationExperienceData'; 
import { FormInput, FormSelect, LoadingState } from './FormComponents';

function EducationSkillsTab() {
  const { education, isLoading } = useEducationExperienceData();
  const { data, handleChange, isEditing, toggleEdit } = education;
  const disabled = !isEditing;

  if (isLoading) return <LoadingState message="Loading Education & Skills..." />;

  const handleSave = () => {
    toggleEdit(); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      
      {/* Education Details Section */}
      <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Education Details</h3>
            <button 
                onClick={isEditing ? handleSave : toggleEdit}
                className={`p-2 rounded-full transition-colors duration-150 ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FormInput label="School / College" name="school" placeholder="e.g. Lincoln College" value={data.school} onChange={handleChange} disabled={disabled} />
              <FormInput label="Highest degree or equivalent" name="degree" placeholder="e.g. Bachelors in Technology" value={data.degree} onChange={handleChange} disabled={disabled} />
              
              <FormInput label="Course" name="course" placeholder="e.g. Computer science engineering" value={data.course} onChange={handleChange} disabled={disabled} />
              <FormSelect label="Year of completion" name="year" value={data.year} onChange={handleChange} disabled={disabled}>
                  <option value="">YYYY</option>
                  <option value="2020">2020</option>
              </FormSelect>
              <FormInput label="Grade" name="grade" placeholder="Enter here" value={data.grade} onChange={handleChange} disabled={disabled} />
          </div>
      </div>

      {/* Skills & Projects Section */}
      <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Skills & Projects</h3>
            <button 
                onClick={isEditing ? handleSave : toggleEdit}
                className={`p-2 rounded-full transition-colors duration-150 ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                  <textarea 
                      id="skills" 
                      name="skills"
                      value={data.skills}
                      onChange={handleChange}
                      placeholder="Enter here" 
                      rows="6" 
                      className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm ${disabled ? 'bg-gray-50' : 'bg-white focus:ring-purple-500 focus:border-purple-500'}`}
                      disabled={disabled}
                  />
              </div>
              <div>
                  <label htmlFor="projects" className="block text-sm font-medium text-gray-700">Projects</label>
                  <textarea 
                      id="projects" 
                      name="projects"
                      value={data.projects}
                      onChange={handleChange}
                      placeholder="Enter here" 
                      rows="6" 
                      className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm ${disabled ? 'bg-gray-50' : 'bg-white focus:ring-purple-500 focus:border-purple-500'}`}
                      disabled={disabled}
                  />
              </div>
          </div>
      </div>

    </div>
  );
}

export default EducationSkillsTab;