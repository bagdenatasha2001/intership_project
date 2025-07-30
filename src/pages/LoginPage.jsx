import React from 'react';
import img from '../assets/images/login_bg.png'
import AuthLayout from '../components/layouts/AuthLayout';
import AutoHeading from '../components/common/AutoHeading';
import Email from '../components/inputs/Email';
import Password from '../components/inputs/Password';
import ForgotPass from '../components/common/ForgotPass';
import Button from '../components/common/Button';




export default function LoginPage() {
  const handleLogin = () => {
    console.log("Login clicked");
  };




  return (
    <AuthLayout img={img}>
      <div className="w-screen flex h-screen items-center justify-center">
        <div className="w-[35.4%] p-10 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
          <div className="w-full flex flex-col justify-start h-full bottom-1">
            <AutoHeading title="Login" />
            <Email />
            <Password />
            <ForgotPass />
            <Button text="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
