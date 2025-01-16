import React from 'react';

const RegisterHeading = () => {
  return (
    <div
      className="flex items-center text-center w-full"
      style={{
        width: '40rem', // Explicit width in rem
        maxWidth: '100%', // Ensures responsiveness
      }}
    >
      {/* Main Heading */}
      <div className="text-4xl font-bold mt-5 mb-8 leading-tight">
        Welcome to SinisterBees
        <div className="text-lg text-gray-400 leading-1">
          Create your account to get started
        </div>
      </div>
    </div>
  );
};

export default RegisterHeading;
