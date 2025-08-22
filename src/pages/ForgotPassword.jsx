import React, { useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img from '../assets/images/login_bg.png';
import Heading from '../components/common/Heading';
import Email from '../components/inputs/Email';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
    setEmailError('');
  };


  const [emailError, setEmailError] = useState('');

  const handleReset = (event) => {
    event.preventDefault();

    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      setEmailError('Enter a valid email address');
      hasError = true;
    }

    if (!hasError) {
      console.log('Reset link sent to:', formData.email);
      navigate('/Confirm');
    }
  };

  return (
    <AuthLayout img={img} >
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-full sm:w-[90%] max-w-[568px] h-full  max-h-[365px] rounded-[30px] shadow-lg bg-white z-10 flex flex-col p-[24px] mt-[30px] ">
          <form className="w-full flex flex-col justify-start h-full ">
            <div className=' w-full max-w-[520px] h-full max-h-[314px] flex flex-col justify-star '>
              <div className='w-full max-w-[520px] h-[99px]  mb-[30px] '>
                <Heading heading1="Forgot Password" />
                <Heading heading2="Enter your email address and we will share a link on your email address." />
              </div>
              <div className='w-full max-w-[520px] h-[85px]  mb-[50px]'>
                <Email
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  error={emailError} />
              </div>
              <Button text=" Reset Password Link sent" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
