import React from 'react';
import styles from '@/styles/label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  text,
  htmlFor,
  className,
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    className={`${styles.label} ${className || ''}`}
    {...props}
  >
    {text && <span>{text}</span>}
    {children}
  </label>
);

export { Label };