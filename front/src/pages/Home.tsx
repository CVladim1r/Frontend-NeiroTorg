import React from 'react';
import { Button } from '../features/Button';

export function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
