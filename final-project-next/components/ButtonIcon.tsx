import React from 'react';
import styles from '../styles/buttonIcon.module.css';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode; 
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className, ...props }) => (
  <button
    type="button"
    className={`${styles.buttonIcon} ${className || ''}`}
    {...props}
  >
    {icon}
  </button>
);

export { ButtonIcon } ;

