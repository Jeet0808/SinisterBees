import React, { useState } from 'react';
import Input from '../../../components/ui/Input/Input'; // Assuming Input component exists
import AuthButton from '../Button'; // Assuming AuthButton exists

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle successful registration logic
    console.log('Email:', email);
    console.log('Password:', password);
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
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <AuthButton content="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
