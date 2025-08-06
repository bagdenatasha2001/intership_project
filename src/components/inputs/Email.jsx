import React from 'react';

export default function Email({ name, label, type, placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
   
      <label htmlFor={name} className="block text-base font-medium text-gray-700 mb-1 font-inter">
        {label} <span className="text-red-600">*</span>
      </label>

      
      <input  id={name} 
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border ${ error ? 'border-red-500' :'border-gray-300'}
         rounded-md focus:outline-none focus:ring-2 bg-gray-50`}  required  />

      {error && 
      <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}




