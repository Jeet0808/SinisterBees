import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-500">{label}</label>
      <input
        className="w-full p-1 border border-gray-300 rounded outline-none bg-white  hover:focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
        placeholder='Enter your email address'
      />
    </div>
  );
};

export default Input;