import React from 'react';
import styles from '../styles/label.module.css';

interface LabelProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, children, className = '' }) => {
  const labelClasses = [styles.base, className].filter(Boolean).join(' ');

  return (
    <label className={labelClasses} htmlFor={text}>
      {children}
    </label>
  );
};

export { Label };