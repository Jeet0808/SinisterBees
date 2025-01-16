import React from 'react';
import LoginHeading from './pagesComp/logincomp/LoginHeading';
import LoginButtons from './pagesComp/logincomp/LoginButtons';
import LoginForms from './pagesComp/logincomp/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-white text-black ">
      {/* Outer Container with enforced width */}
      <div
        className="p-8 mb-10"
        style={{
          width: '32rem', // Explicit width in rem
          maxWidth: '80%', // Ensures responsiveness
        }}
      >
        <LoginHeading />
        <LoginButtons />
       
        <LoginForms />
      </div>
    </div>
  );
};

export default Login;
