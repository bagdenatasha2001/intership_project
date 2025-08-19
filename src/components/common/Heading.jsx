import React from 'react';

export default function Heading({ heading1, heading2,  heading3,heading4}) {
  return (
    <div >
      {heading1 && (
        <h2 className="text-3xl font-bold font-inter mb-[30px]">{heading1}</h2>
      )}

      {heading2 && (
        <p className="text-[20px] font-normal font-inter text-[rgba(87,85,85,0.8)]  mt-[-16px] leading-[28px] mb-[30px]">
          {heading2}
        </p>
      )}
      {heading3 && (
        <p className="text-[30px] font-bold font-inter text-black leading-[40px] ">
          {heading3}
        </p>
      )}
      {heading4 && (
        <p className="text-[16px] font-normal font-inter text-gray-500 leading-[24px] ">
          {heading4}
        </p>
      )}
    </div>
  );
}
