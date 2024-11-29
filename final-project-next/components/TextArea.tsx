import React from 'react';
import styles from '@/styles/textArea.module.css';
import { Label } from '@/components/Label';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = '',
  label,
  error,
  disabled = false,
  rows = 3,
  cols,
}) => {
  const labelId = label ? `label-${Math.random().toString(5).slice(2, 9)}` : undefined;

  return (
    <div className={styles.textArea}>
      <Label>{label}</Label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.textarea} ${error ? styles.errorTextArea : ''}`}
        aria-labelledby={labelId}
        disabled={disabled}
        rows={rows}
        cols={cols}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export { TextArea };
