import React from 'react';
import AuthButton from '../Button';

interface LogoutConfirmationProps {
  onLoginRedirect: () => void;
}

const LogoutConfirmation: React.FC<LogoutConfirmationProps> = ({ onLoginRedirect }) => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '1rem',
      }}
    >
      <p className="text-gray-600 text-center mb-6">
        You have been successfully logged out. Would you like to log in again?
      </p>
      <div className="flex justify-center">
        <AuthButton content="Log In" onClick={onLoginRedirect} />
      </div>
    </div>
  );
};

export default LogoutConfirmation;
