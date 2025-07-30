import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import img2 from '../assets/images/forgot_bg.png'
import SuccessIcon from '../components/common/SuccessIcon'
import SuccessMessage from '../components/common/SuccessMessage'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'

export default function PasswordUpdated() {

const navigate = useNavigate();

const BackToLogin = () => {
  navigate('/'); 
};

  return (
    <>
    <AuthLayout img={img2}>
              <div className="w-screen flex h-screen items-center justify-center">
                <div className="w-[30.28%] p-6 rounded-[30px] shadow-lg bg-white mx-auto z-10 absolute">
                  <div className="w-full flex flex-col justify-start h-full bottom-1 gap-6">
                    <SuccessIcon/>
                    <SuccessMessage/>
                    
                    <Button text=" Back To Login " onClick={BackToLogin} />
                  </div>
                </div>
              </div>
            </AuthLayout>




    </>
        
  )
}
