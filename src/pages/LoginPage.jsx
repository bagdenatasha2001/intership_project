import React, { useState } from 'react';
import img from '../assets/images/login_bg.png';
import AuthLayout from '../components/layouts/AuthLayout';
import Heading from '../components/common/Heading';
import Email from '../components/inputs/Email';
import PasswordField from '../components/inputs/PasswordField';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

 
  // const handleEmailChange = (event) => {
  //   let val = event.target.value;
  //   let key = event.target.name;
  //   setFormData({ ...formData, [key]:val });
  //   setEmailError(''); 

   const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
    setEmailError('');
  };

  
  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
    setPasswordError('');
  };


  const [emailError, setEmailError] = useState('');

  const [passwordError, setPasswordError] = useState('');
 
  const handleLogin = (event) => {
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
     

    if (!formData.password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (!hasError) {
      console.log('Login Data:',formData);
    }
  };

  return (
    <>
    <AuthLayout img={img}>
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-[35.4%] p-5 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
          <form onSubmit={handleLogin} noValidate className="w-full flex flex-col justify-start h-full bottom-1 gap-3">
            <Heading heading1="Login" />

            <Email
              value={formData.email}
              onChange={handleEmailChange}
              error={emailError}
              placeholder="Enter your email"
              label="Email Address"
              name="email"
              type="email"
            />

            <PasswordField
              value={formData.password}
              onChange={handlePasswordChange}
              error={passwordError}
              placeholder="Enter your password"
              label="Password"
              name="password"
            />

            <div className="text-right mb-4 mt-[-28px]">
              <Link to="/forgot" className="text-black text-sm font-bold font-inter">
                Forgot password?
              </Link>
            </div>

            <Button text="Login" type="submit" />
          </form>
        </div>
      </div>
    </AuthLayout>
    </>
  )
  }
