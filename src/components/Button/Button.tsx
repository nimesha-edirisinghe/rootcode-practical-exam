import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'default';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', ...props }) => {
  const buttonClass = `button ${variant}`;

  return <button className={buttonClass} {...props} />;
};

export default Button;
