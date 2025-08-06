import React from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img2 from '../assets/images/forgot_bg.png';
import SuccessTick from '../assets/images/Success_img.png';
import Heading from '../components/common/Heading';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function PasswordUpdated() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <AuthLayout img={img2}>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[32.28%] p-5 rounded-[30px] shadow-lg bg-white z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
           
            <img src={SuccessTick} alt="Success Icon" className="w-28 h-28" />

            <Heading heading1="Password Updated Successfully" />
            <Heading heading2="Your password has been updated successfully." />

            
           
             <div className="w-full">
             <Button text="Back To Login" onClick={handleBackToLogin} />
             </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
