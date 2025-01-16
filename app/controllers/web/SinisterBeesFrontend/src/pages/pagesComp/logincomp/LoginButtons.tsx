import React from 'react';
import Button from '../../../components/ui/Button/button'; 
import googleLogo from "../../../assets/google.png";



const LoginButtons = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[40rem] mt-2 " >
      {/* Google Button */}
      <Button
        variant="secondary"
        size="lg"
         className= "flex items-center  bg-white justify-center w-full h-9 border border-gray-300 rounded-lg text-black font-medium transition hover:bg-gray-100 outline-none outline-none "
        onClick={() => console.log('Google login')}
      >
        <img src={googleLogo} alt="Google" className="h-5 w-5 mr-2" />
        Continue with Google
      </Button>

      {/* Apple Button */}
      <Button
        variant="secondary"
        size="lg"
        className="flex items-center  bg-white justify-center w-full h-9 border border-gray-300 rounded-lg text-black font-medium transition hover:bg-gray-100 outline-none outline-none "
        onClick={() => console.log('Apple login')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple"
          className="h-5 w-5 mr-2"
        />
        Continue with Apple
      </Button>
      <hr />
    </div>
  );
};

export default LoginButtons;
