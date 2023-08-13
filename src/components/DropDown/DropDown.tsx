import React, { SelectHTMLAttributes } from 'react';
import './DropDown.css';

interface DropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  options,
  onChange,
  value,
  ...props
}) => {
  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      <select className="select-field" onChange={onChange} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
