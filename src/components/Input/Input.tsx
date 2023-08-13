import React, { InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <input className="input-field" {...props} />
      {label && <label className="input-label">{label}</label>}
    </div>
  );
};

export default Input;
