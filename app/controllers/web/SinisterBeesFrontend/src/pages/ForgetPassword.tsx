import React from 'react';
import ForgetPasswordHeading from './pagesComp/forgetpasscomp/ForgetPasswordHeading';
import ForgetPasswordForm from './pagesComp/forgetpasscomp/ForgetPasswordForm';

const ForgetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      {/* Outer Container with enforced width */}
      <div
        className="p-8 mb-10"
        style={{
          width: '38rem', // Explicit width in rem
          maxWidth: '80%', // Ensures responsiveness
        }}
      >
        <ForgetPasswordHeading />
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPassword;
