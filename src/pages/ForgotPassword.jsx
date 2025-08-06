import React, { useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img2 from '../assets/images/Forgot_bg.png';
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
    }else if (!emailRegex.test(formData.email)) {
      setEmailError('Enter a valid email address');
      hasError = true;
     }

    if (!hasError) {
      console.log('Reset link sent to:', formData.email);
      navigate('/Confirm');
    }
  };

  return (
    <AuthLayout img={img2}>
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-[35.4%] p-6 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
          <form
            onSubmit={handleReset}  noValidate
            className="w-full flex flex-col justify-start h-full bottom-1 space-y-6"
          >
            <Heading heading1="Forgot Password" />
            <Heading heading2="Enter your email address and we will share a link on your email address." />

            <Email
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleEmailChange}
              error={emailError}
            />

            <Button text=" Reset Password Link sent" type="submit" />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
