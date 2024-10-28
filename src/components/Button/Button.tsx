import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  onClick,
  id,
  children,
  className = '',
  image = '',
  type = 'button',
  disabled = false,
}): JSX.Element => {
  return (
    <button
      className={className}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {image && <img src={image} alt="Button Icon"></img>}
    </button>
  );
};

export default Button;
