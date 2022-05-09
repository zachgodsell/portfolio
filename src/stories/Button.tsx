import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: 'small' | 'medium' | 'large';

  label: string;

  onClick?: () => void;
}
 
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <button
      type="button"
      className={`btn ${mode} btn-${size}`}
      {...props}
    >
      {label}
    </button>
  );
};
