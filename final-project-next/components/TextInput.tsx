import React from 'react';
import styles from '@/styles/textInput.module.css';
import { Label} from '@/components/Label';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  label,
  error,
  disabled = false,
}) => {
  const labelId = label ? `label-${Math.random().toString(5).slice(2, 9)}` : undefined;

  return (
    <div className={styles.textInput}>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
        aria-labelledby={labelId}
        disabled={disabled}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export { TextInput };
