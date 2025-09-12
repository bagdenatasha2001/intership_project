import React, { useState } from 'react';
import img from '../assets/images/login_bg.png';
import AuthLayout from '../components/layouts/AuthLayout';
import Heading from '../components/common/Heading';
import Email from '../components/inputs/Email';
import PasswordField from '../components/inputs/PasswordField';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
    setPasswordError('');
  };

  const handleLogin = (event) => {
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

    if (!formData.password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (!hasError) {
      console.log('Login Data:', formData);
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout img={img} logoRedirectTo="/dashboard">
      <div className="w-full sm:w-[90%] max-w-[565px] rounded-[30px] shadow-lg bg-white p-[26px] ">
        <form onSubmit={handleLogin} noValidate className="flex flex-col justify-between h-full">
          <div>
            <Heading heading1="Login" className="text-[28px]" />
            <Email
              value={formData.email}
              onChange={handleEmailChange}
              error={emailError}
              placeholder="Enter your email"
              label="Email Address"
              name="email"
              type="email" />
            <PasswordField
              value={formData.password}
              onChange={handlePasswordChange}
              error={passwordError}
              placeholder="Enter your password"
              label="Password"
              name="password" />
            <div className="text-right mt-2">
              <Link to="/forgot-password" className="text-black text-base font-bold font-inter ">
                Forgot password?
              </Link>
            </div>
          </div>
          <div className='mt-4'>
            <Button text="Login" type="submit" />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
