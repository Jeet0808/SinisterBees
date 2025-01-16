import React from 'react';
import RegisterHeading from './pagesComp/registercomp/RegisterHeading';
import RegisterForm from './pagesComp/registercomp/RegisterForm';

const Register = () => {
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
        <RegisterHeading />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
