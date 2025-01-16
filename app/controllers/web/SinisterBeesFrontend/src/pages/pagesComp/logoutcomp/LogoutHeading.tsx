import React from 'react';

const LogoutHeading = () => {
  return (
    <div
      className="flex items-center text-center w-full"
      style={{
        width: '30rem', // Explicit width in rem
        maxWidth: '100%', // Ensures responsiveness
      }}
    >
      <div className="text-4xl font-bold mt-5 mb-8 leading-tight">
        You are Logged Out
        <div className="text-lg text-gray-400 leading-1">
          Thank you for using SinisterBees
        </div>
      </div>
    </div>
  );
};

export default LogoutHeading;
