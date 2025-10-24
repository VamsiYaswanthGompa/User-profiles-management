
export const FormInput = ({ label, name, placeholder, type = 'text', value, onChange, disabled, w = 'col-span-full sm:col-span-1' }) => (
  <div className={w}>
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

export const FormSelect = ({ label, name, value, onChange, disabled, children, w = 'col-span-full sm:col-span-1' }) => (
  <div className={w}>
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

export const LoadingState = ({ message }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center h-48">
      <p className="text-purple-600 font-semibold animate-pulse">{message}</p>
    </div>
);