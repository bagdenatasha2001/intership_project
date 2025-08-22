import React from 'react';
import Logo from '../logo/Logo';

export default function AuthLayout({ img, children }) {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex relative"
      style={{ backgroundImage: `url(${img})` }}>
     <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute top-0 left-0 z-20">
        <Logo />
      </div>
      <div className="z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}



















 
        

     
     
 







      
   
