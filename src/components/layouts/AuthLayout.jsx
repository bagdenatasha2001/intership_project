import React from 'react';
import img1 from '../../assets/images/login_bg.png';
import LoginForm from '../common/LoginForm';

export default function AuthLayout() {
  return (
  <>
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center  relative  "
      style={{ backgroundImage: `url(${img1})` }}

      
    >

<div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
<div className="z-10 w-full flex justify-center mx-auto">
  <div className="w-[90%] max-w-[520px]">
    <LoginForm />
  </div>
</div>
     

    
   

    </div>
    </>
  );
}



























   

 
        

     
     
 







      
   
