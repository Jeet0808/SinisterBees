import React, { useState } from 'react';
import Input from '../../../components/ui/Input/Input'; 
import AuthButton from '../Button';

const ForgetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forget password logic here
    console.log('Email:', email);
    if (resetCode) {
      console.log('Reset Code:', resetCode);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        marginTop: '1rem',
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Optional Reset Code Input */}
        <Input
          label="Reset Code (Optional)"
          type="text"
          value={resetCode}
          onChange={(e) => setResetCode(e.target.value)}
        />

        {/* Submit Button */}
        <AuthButton content="Send Reset Link" />
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
