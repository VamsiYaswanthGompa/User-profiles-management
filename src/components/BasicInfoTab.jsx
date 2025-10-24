import { useProfileData } from '../hooks/useProfileData'; 
// import { useEducationExperienceData } from './useEducationExperienceData'; 
// import { FormInput, FormSelect, LoadingState } from './FormComponents';

const FormInput = ({ label, name, placeholder, type = 'text', value, onChange, disabled }) => (
  <div className="col-span-full sm:col-span-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm 
        ${disabled ? 'bg-gray-50 text-gray-700 cursor-not-allowed' : 'bg-white focus:ring-purple-500 focus:border-purple-500'}
        transition duration-150`}
      disabled={disabled}
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, disabled, children }) => (
  <div className="col-span-full sm:col-span-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm appearance-none 
        ${disabled ? 'bg-gray-50 text-gray-700 cursor-not-allowed' : 'bg-white focus:ring-purple-500 focus:border-purple-500'}
        transition duration-150`}
      disabled={disabled}
    >
      {children}
    </select>
  </div>
);


function BasicInfoTab({ initialModalData }) {
  const { data, isLoading, error, isEditing, toggleEdit, handleChange, handleSubmit } = useProfileData(initialModalData);
  const disabled = !isEditing;


  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center h-48">
        <p className="text-purple-600 font-semibold animate-pulse">Loading Basic Details...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center h-48">
        <p className="text-red-600 font-semibold">❌ Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      
      {/* Basic Details Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Basic Details</h3>
        {/* Edit/Save Button */}
        <button 
          onClick={isEditing ? handleSubmit : toggleEdit}
          className={`p-2 rounded-full transition-colors duration-150 ${isEditing ? 'bg-violet-200 text-violet-500' : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'}`}
        >
          {isEditing ? (
            // Save Icon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            // Edit Icon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L15.232 5.232z" />
            </svg>
          )}
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <FormInput label="First name" name="firstName" placeholder="e.g. John" value={data.firstName} onChange={handleChange} disabled={disabled} />
          <FormInput label="Last name" name="lastName" placeholder="e.g. Doe" value={data.lastName} onChange={handleChange} disabled={disabled} />
          <FormInput label="Email ID" name="email" placeholder="e.g. mnobody@mail.com" type="email" value={data.email} onChange={handleChange} disabled={disabled} />

          <FormSelect label="Year of birth" name="yearOfBirth" value={data.yearOfBirth} onChange={handleChange} disabled={disabled}>
            <option value="">YYYY</option>
            <option value="1990">1990</option>
            <option value="2000">2000</option>
          </FormSelect>
          <FormSelect label="Gender" name="gender" value={data.gender} onChange={handleChange} disabled={disabled}>
            <option value="">Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </FormSelect>
          <FormInput label="Phone number" name="phoneNumber" placeholder="+91 8332883854" value={data.phoneNumber} onChange={handleChange} disabled={disabled} />
          
          <FormInput label="Alternate Phone no" name="alternatePhone" placeholder="e.g. 9876543210" value={data.alternatePhone} onChange={handleChange} disabled={disabled} />
          
          <div className="col-span-full sm:col-span-2 lg:col-span-1"> 
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea 
                  id="address" 
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  placeholder="Enter here" 
                  rows="3" 
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm ${disabled ? 'bg-gray-50 text-gray-700 cursor-not-allowed' : 'bg-white focus:ring-purple-500 focus:border-purple-500'} transition duration-150`}
                  disabled={disabled}
              />
          </div>

          <div className="space-y-6">
              <FormInput label="Pincode" name="pincode" placeholder="Enter here" value={data.pincode} onChange={handleChange} disabled={disabled} w="w-full" />
              <FormSelect label="Domicile country" name="domicileCountry" value={data.domicileCountry} onChange={handleChange} disabled={disabled}>
                <option value="">Select an option</option>
                <option value="IN">India</option>
              </FormSelect>
          </div>
          
          <div className="mt-0 lg:mt-6">
              <FormSelect label="Domicile state" name="domicileState" value={data.domicileState} onChange={handleChange} disabled={disabled}>
                <option value="">Select an option</option>
                <option value="AP">Andhra Pradesh</option>
              </FormSelect>
          </div>

        </div>
      </form>
    </div>
  );
}

export default BasicInfoTab;