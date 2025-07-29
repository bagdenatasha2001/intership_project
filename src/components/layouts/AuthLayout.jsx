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


// import React from 'react';
// import img1 from '../../assets/images/login_bg.png';
// import LoginForm from '../common/LoginForm';

// export default function AuthLayout() {
//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
//       style={{ backgroundImage: `url(${img1})` }}
//     >
//       {/* 🔲 DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* ⬜ LOGIN FORM */}
//       <div className="z-10">
//         <LoginForm />
//       </div>
//     </div>
//   );
// }





















// import React from 'react';
// import img1 from '../../assets/images/login_bg.png';
// import LoginForm from '../common/LoginForm';
// import Logo from '../logo/Logo';

// export default function AuthLayout() {
//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center relative flex items-center justify-center"
//       style={{ backgroundImage: `url(${img1})` }}
//     >
      
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

//       {/* ✅ Logo positioned at top-left */}
//       <div className="absolute top-6 left-6 z-10">
//         <Logo />
//       </div>

//       {/* ⬜ Login form centered */}
//       <div className="z-10">
//         <LoginForm />
//       </div>
//     </div>
//   );
// }

   

 
        

     
     
 







      
   