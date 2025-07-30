import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import img2 from '../assets/images/Forgot_bg.png'
import AutoHeading from '../components/common/AutoHeading'
import Subheading from '../components/common/Subheading'
import Email from '../components/inputs/Email'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'


export default function ForgotPassword() {

const navigate = useNavigate();

const handleReset = () => {
  navigate('/Confirm'); 
};


  return (
    <>
    <AuthLayout img={img2}>
          <div className="w-screen flex h-screen items-center justify-center">
            <div className="w-[35.4%] p-6 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
              <div className="w-full flex flex-col justify-start h-full bottom-1 space-y-9">
                <AutoHeading title="Forgot Password" />
                <Subheading text="Enter your email address and will share an link on your email address "/>
                <Email />
                <Button text="Send Reset Password Link" onClick={handleReset} />
              </div>
            </div>
          </div>
        </AuthLayout>
    
    </>
  )
}
