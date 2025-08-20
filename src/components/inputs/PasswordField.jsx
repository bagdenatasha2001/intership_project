// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// export default function PasswordField({ label, name, placeholder, value, onChange, error }) {
//   const [show, setShow] = useState(false);

//   return (
//     <div className=" relative w-full max-w-[520px] h-[85px]  ">
  
//       <label htmlFor={name} className="block text-sm font-medium text-black mb-3 font-inter ">
//         {label} <span className="text-red-600">*</span>
//       </label>

    
//       <input
//         id={name}
//         name={name}
//         type={show ? 'text' : 'password'}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className={`w-full px-4 h-[50px] items-center border ${ error ? 'border-red-500' : 'border-gray-300'}
//          rounded-md focus:outline-none focus:ring-2 pr-10 bg-gray-50`} required />

     
//       <button
//         type="button"
//         onClick={() => setShow(!show)}
//         className="absolute right-3 top-[55px] text-gray-600 "
//       >
//         {show ? <FaEye size={20} />:<FaEyeSlash size={20}  /> }
//       </button>

    
//       {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
//     </div>
//   );
// }

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordField({ label, name, placeholder, value, onChange, error }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-[520px] h-[85px]">
      {/* Label */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-black mb-3 font-inter"
      >
        {label} <span className="text-red-600">*</span>
      </label>

      {/* Input + Icon Wrapper */}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 h-[50px] border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 pr-10 bg-gray-50`}
          required
        />

        {/* Eye Icon (centered to input) */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
        >
          {show ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
