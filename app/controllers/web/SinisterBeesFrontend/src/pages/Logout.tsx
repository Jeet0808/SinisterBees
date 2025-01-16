import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutHeading from './pagesComp/logoutcomp/LogoutHeading';
import LogoutConfirmation from './pagesComp/logoutcomp/LogoutConfirmation';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions (e.g., clearing session, tokens, etc.)
    console.log('User logged out');
  }, []);

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
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
        <LogoutHeading />
        <LogoutConfirmation onLoginRedirect={handleLoginRedirect} />
      </div>
    </div>
  );
};

export default Logout;
