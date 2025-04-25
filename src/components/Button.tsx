import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  size = 'medium',
  onClick,
  fullWidth = false,
  className = '',
}) => {
  return (
    <button
      className={`button ${type} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
