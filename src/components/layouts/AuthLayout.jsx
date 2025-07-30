import React from 'react';
import Logo from '../logo/Logo';

export default function AuthLayout({ img, children }) {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="z-10 w-full h-full">
        <Logo />
        {children}
      </div>
    </div>
  );
}





















 
        

     
     
 







      
   
