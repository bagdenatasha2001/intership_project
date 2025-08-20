import React from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img from '../assets/images/login_bg.png';
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
    <AuthLayout img={img}>
      <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-full  max-w-[436px]  max-h-[415px] rounded-[30px] shadow-lg bg-white z-10 flex flex-col items-center justify-center py-[20px]  mt-[30px]">
                  
          <div className="flex flex-col items-center  justify-center w-full max-w-[376px] h-full max-h-[349px]">

            <div>
    
            <img src={SuccessTick} alt="Success Icon" className="h-[105px]" />
            </div>
            

             <div className="flex flex-col items-center justify-center w-full max-w-[376px] text-center mb-[5px]   ">
             <Heading heading3="Password Updated Successfully" />
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-[376px] text-center  mb-[50px]" >
             <Heading heading4="Your password has been updated successfully." />
             </div>

           
             <div className="w-full ">
             <Button text="Back To Login" onClick={handleBackToLogin} />
             </div>

          </div>
        </div>
        </div>
     
    </AuthLayout>
  
  );
}
