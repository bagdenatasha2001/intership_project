import React from 'react';

export default function Heading({ heading1, heading2 }) {
  return (
    <div className="mb-4">
      {heading1 && (
        <h2 className="text-3xl font-bold font-inter">{heading1}</h2>
      )}

      {heading2 && (
        <p className="text-base  font-normal font-inter text-gray-500 mt-[-12px]">
          {heading2}
        </p>
      )}
    </div>
  );
}
