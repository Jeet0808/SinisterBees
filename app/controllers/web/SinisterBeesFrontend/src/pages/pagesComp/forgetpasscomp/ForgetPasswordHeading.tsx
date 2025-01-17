import React from 'react';
import encripted from "../../../assets/encrypted.png";

const ForgetPasswordHeading = () => {
  return (
    <div
      className="flex items-center text-center w-full"
      style={{
        width: '30rem', // Explicit width in rem
        maxWidth: '100%', // Ensures responsiveness
      }}
    >
        <div>
                    <img src={encripted} alt="security" style={{width:'10rem'}}/>
                </div>
      {/* Main Heading */}
      <div className="text-2xl font-bold mt-5 mb-8 leading-tight">
        Reset Your Password
        <div className="text-lg text-gray-400 leading-1">
          Enter your email to receive a reset link
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordHeading;
