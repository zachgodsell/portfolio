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
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['button-main', `button-main--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
