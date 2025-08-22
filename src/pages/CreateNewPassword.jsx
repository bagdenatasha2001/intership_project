import React, { useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img from '../assets/images/login_bg.png';
import Heading from '../components/common/Heading';
import PasswordField from '../components/inputs/PasswordField';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateNewPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleNewPasswordChange = (event) => {
    setFormData({ ...formData, newPassword: event.target.value });
    setNewPasswordError('');
  };

  const handleConfirmPasswordChange = (event) => {
    setFormData({ ...formData, confirmPassword: event.target.value });
    setConfirmPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;

    if (!formData.newPassword) {
      setNewPasswordError('New password is required');
      hasError = true;
    }

    if (!formData.confirmPassword) {
      setConfirmPasswordError('Please confirm your new password');
      hasError = true;
    }

    if (
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }

    if (!hasError) {
      console.log('Password successfully reset:', formData);
      navigate('/updated');
    }
  };

  return (
    <AuthLayout img={img}>
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-full sm:w-[90%] max-w-[568px] h-full  max-h-[447px] rounded-[30px] shadow-lg bg-white z-10 flex flex-col p-[24px] mt-[30px] ">
          <form onSubmit={handleSubmit} noValidate   >
            <div className='w-full max-w-[520px] h-full max-h-[399px] flex flex-col justify-start'>
              <div className='w-full max-w-[520px] h-[79px]  mb-[30px]'>
                <Heading heading1="Create New Password" />
                <Heading heading2="Set a strong password to keep your account secure." />
              </div>
              <div className="max-w-[520px] h-[85px] mb-[20px] ">
                <PasswordField
                  name="newPassword"
                  label="Password"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleNewPasswordChange}
                  error={newPasswordError} />
              </div>

              <div className="max-w-[520px] h-[85px] mb-[50px]">
                <PasswordField
                  name="confirmPassword"
                  label="Confirm New Password"
                  placeholder="Re-enter new password"
                  value={formData.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  error={confirmPasswordError} />
              </div>
              <Button text="Send Reset Password Link" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
