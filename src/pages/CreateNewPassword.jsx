import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import img2 from '../assets/images/Forgot_bg.png'
import AutoHeading from '../components/common/AutoHeading'
import Subheading from '../components/common/Subheading'
import NewPassword from '../components/inputs/NewPassword'
import Confirm from '../components/inputs/Confirm'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'




export default function CreateNewPassword() {

  
const navigate = useNavigate();

const updated = () => {
  navigate('/updated'); 
};


  return (
    <>
            <AuthLayout img={img2}>
              <div className="w-screen flex h-screen items-center justify-center">
                <div className="w-[35.4%] p-7 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
                  <div className="w-full flex flex-col justify-start h-full bottom-1 space-y-7">
                    <AutoHeading title="Create New Password" />
                    <Subheading text="Set a strong password to keep your account secure."/>
                    <NewPassword/>
                    <Confirm/>
                    <Button text="Send Reset Password Link" onClick={updated} />
                  </div>
                </div>
              </div>
            </AuthLayout>
      
    </>
  )
}
