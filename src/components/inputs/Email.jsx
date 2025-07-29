import React from 'react'

export default function Email({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-base font-medium text-gray-700 mb-1 font-inter">Email Address </label>
      <input
        type="email"  value={value}  onChange={onChange} placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-gray-50"
        required/>
    </div>
  )
}

