import React from 'react';
import Button from '../../components/ui/Button/button';

interface ButtonProps {
  content: string;
  onClick?: () => void; // Optional onClick function passed from parent
}

const AuthButton: React.FC<ButtonProps> = ({ content, onClick }) => {
  // Define the click handler
  const handleClick = () => {
    console.log('Button clicked');
    if (onClick) {
      onClick(); // Call the custom onClick function if provided
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        size="md"
        className="inline-grid items-center justify-center whitespace-nowrap h-9 rounded-md text-sm font-medium px-3 bg-blue-500 shadow-md text-white mt-1.5 mb-3 w-full hover:bg-blue-500 transition ease-in focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleClick} // Use the handleClick function
      >
        {content}
      </Button>
    </div>
  );
};

export default AuthButton;
