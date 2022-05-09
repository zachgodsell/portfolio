import React from 'react'
import './Input.css'

interface ButtonProps {
    type: string;

    size: 'small' | 'medium' | 'large';

    label: string;
}
export const Input = ({
    type = 'text',
    size = 'medium',
    label,
    ...props
}: ButtonProps) => {

  return (
    <input
    className={`input-main input-main--${size}`}
    type={type}
    placeholder={label}
    {...props}
    >
    </input>
  )
}
