// import React from 'react';
// import AutoHeading from './AutoHeading';
// import Email from '../inputs/Email';
// import Password from '../inputs/Password';
// import ForgotPass from './ForgotPass';
// import Button from './Button';

// export default function LoginForm() {
//   return (
//     <div className="w-[35.4%] p-6 rounded-[30px] shadow-lg bg-white">
//       <div className="w-full flex flex-col justify-start  rounded-2xl  h-full">
//         <AutoHeading />
//         <Email />
//         <Password />
//         <ForgotPass />
//         <Button text="Login" onClick={onclick} />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import AutoHeading from './AutoHeading';
import Email from '../inputs/Email';
import Password from '../inputs/Password';
import ForgotPass from './ForgotPass';
import Button from './Button';

export default function LoginForm() {
  return (
    <div className="w-[95%] p-6 rounded-[30px] shadow-lg bg-white mx-auto ">
      <div className="w-full flex flex-col justify-start rounded-[30px] h-full ">
        <AutoHeading title="Login" />
        <Email />
        <Password />
        <ForgotPass />
        <Button text="Login" onClick={onclick} />
      </div>
    </div>
  );
}
