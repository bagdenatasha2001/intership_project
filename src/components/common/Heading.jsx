import React from 'react';

export default function Heading({ heading1, heading2 }) {
  return (
    <div className="mb-[30px]">
      {heading1 && (
        <h2 className="text-3xl font-bold font-inter">{heading1}</h2>
      )}

      {heading2 && (
        <p className="text-[20px] font-normal font-inter text-[rgba(87,85,85,0.8)]  mt-[-12px] leading-[28px]">
          {heading2}
        </p>
      )}
    </div>
  );
}
