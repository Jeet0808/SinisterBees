import React, { useState } from 'react';
import Input from '../../../components/ui/Input/Input'; 
import AuthButton from '../Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div
      style={{
        width: '100%', 
        marginTop: '1rem', 
      }}
    >
    
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      <AuthButton content="Continue" />
        
      </form>
    
    </div>
  );
};

export default LoginForm;
