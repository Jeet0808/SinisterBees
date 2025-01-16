import React from 'react';

const LoginHeading = () => {
  return (
    <div className="flex  items-center text-center w-full"
    
        style={{
          width: '30rem', // Explicit width in rem
          maxWidth: '100%', // Ensures responsiveness
        }}>
      {/* Main Heading */}
      <div className="text-4xl font-bold mt-5 mb-8 leading-tight" >
        Think it. Make it.
        <div className="text-lg text-gray-400 leading-1 mr-5 ">
          Log in to SinisterBees account
        </div>
      </div>
    </div>
  );
};

export default LoginHeading;
