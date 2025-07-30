import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function NewPassword({ value, onChange }) {

    const [show, setShow] = useState(false);

  return (
    <>
    <div className="mb-4 relative">
      <label className="block text-sm font-bold text-black mb-1 font-inter">
        New Password
      </label>

      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="Enter new password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 pr-10 bg-gray-50"
        required
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[38px]"
      >
        {show ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
      </button>
    </div>


      
    </>
  )
}
