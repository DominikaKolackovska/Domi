import React from 'react';
import styles from '@/styles/button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';


interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label = 'label',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick

}) => {
  const buttonClasses = [
    styles.base,
    label ? styles.label : '',
    variant === 'primary' ? styles.primary : styles.secondary,
    size === 'small'
      ? styles.small
      : size === 'large'
      ? styles.large
      : styles.medium,
    disabled ? styles.disabled : '',
    onClick,
    {label}
  ].join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export  { Button } ;
