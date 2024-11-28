import React from 'react';
import styles from '@/styles/button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children
}) => {
  const buttonClasses = [
    styles.base,
    variant === 'primary' ? styles.primary : styles.secondary,
    size === 'small'
      ? styles.small
      : size === 'large'
      ? styles.large
      : styles.medium,
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export  { Button } ;
