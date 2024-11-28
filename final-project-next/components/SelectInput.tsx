import React, { useState, useRef, useEffect } from 'react';
import  {Label}  from '@/components/Label';
import styles from '@/styles/selectInput.module.css';
import { IoIosArrowDown } from "react-icons/io";

type SelectOption = {
  value: string;
  label: string;
};

type SelectInputState = 'default' | 'selected' | 'success' | 'error';

type SelectInputProps = {
  label: string;
  options: SelectOption[];
  value: string;
  state?: SelectInputState;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  value,
  state = 'default',
  handleChange,
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectClick = () => {
    if (!disabled) setIsOpen((prev) => !prev); 
  };

  const stateClass = {
    default: styles.default,
    selected: styles.selected,
    success: styles.success,
    error: styles.error,
  }[state];

  return (
    <div className={`${styles.wrapper} ${className} ${disabled ? styles.disabled : ''}`.trim()}>
      <Label>{label}</Label>
      <div className={`${styles.selectWrapper} ${stateClass}`}>
        <div
          className={`${styles.select} ${disabled ? styles.disabledSelect : ''}`}
          onClick={handleSelectClick}
          aria-haspopup="listbox"
          aria-expanded={isOpen && !disabled ? 'true' : 'false'}
          aria-disabled={disabled}
        >
          {options.find((option) => option.value === value)?.label || 'Select an option'}
          <IoIosArrowDown className={styles.icon} />
        </div>
        
        {isOpen && !disabled && (
          <div className={styles.dropdown} ref={dropdownRef}>
            {options.map((option, index) => (
              <React.Fragment key={option.value}>
                <div
                  className={styles['dropdown-option']}
                  onClick={() => {
                    handleChange({
                      target: { value: option.value },
                    } as React.ChangeEvent<HTMLSelectElement>);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </div>
                {index < options.length - 1 && <div className={styles['dropdown-divider']}></div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { SelectInput };
