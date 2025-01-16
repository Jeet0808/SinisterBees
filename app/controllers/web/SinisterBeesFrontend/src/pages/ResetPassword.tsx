import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordHeading from './pagesComp/resetpasscomp/ResetPasswordHeading';
import ResetPasswordForm from './pagesComp/resetpasscomp/ResetPasswordForm';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleResetPassword = (email: string, newPassword: string) => {
    // Handle the reset password logic here
    console.log('Email:', email);
    console.log('New Password:', newPassword);

    // Redirect to login page after resetting password
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      {/* Outer Container with enforced width */}
      <div
        className="p-8 mb-10"
        style={{
          width: '32rem', // Explicit width in rem
          maxWidth: '80%', // Ensures responsiveness
        }}
      >
        <ResetPasswordHeading />
        <ResetPasswordForm onSubmit={handleResetPassword} />
      </div>
    </div>
  );
};

export default ResetPassword;
