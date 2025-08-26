import React from 'react';
import logo1 from '../../assets/images/logo_1.svg';
import { useNavigate } from 'react-router-dom';

export default function Logo({ redirectTo = '/' }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(redirectTo);

  return (
    <div
      className="flex items-center mt-[41px] ml-[51px] w-[191px] h-[53px] cursor-pointer"
      onClick={handleClick}>
      <img src={logo1} alt="GoGrand Logo" />
    </div>
  );
}
