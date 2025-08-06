import React, { useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import img2 from '../assets/images/Forgot_bg.png';
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
    <AuthLayout img={img2}>
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-[35.4%] p-6 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
          <form
            onSubmit={handleSubmit} noValidate
            className="w-full flex flex-col justify-start h-full bottom-1 space-y-6"
          >
            <Heading heading1="Create New Password" />
            <Heading heading2="Set a strong password to keep your account secure." />

            <PasswordField
              name="newPassword"
              label="New Password"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleNewPasswordChange}
              error={newPasswordError}
            />

            <PasswordField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-enter new password"
              value={formData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={confirmPasswordError}
            />

            <Button text="Send Reset Password Link" type="submit" />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
