import React, { useState, useRef, useEffect } from 'react';
import { Label } from '../components/Label';
import styles from '../styles/selectInput.module.css';

type SelectOption = {
  value: string;
  label: string;
};

type SelectInputProps = {
  name: string;
  label: string;
  options: SelectOption[];
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  value,
  handleChange,
  className = '',
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
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <Label text={name}>{label}</Label>
      <div className={styles.selectWrapper}>

        <div
          className={styles.select}
          onClick={handleSelectClick}
          aria-haspopup="listbox"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {options.find((option) => option.value === value)?.label || 'Select an option'}
        </div>
        <span className={styles.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </span>
        {isOpen && (
          <div className={styles.dropdown} ref={dropdownRef}>
            {options.map((option, index) => (
              <React.Fragment key={option.value}>
                <div
                  className={styles['dropdown-option']}
                  onClick={() => {
                    handleChange({ target: { value: option.value } } as React.ChangeEvent<HTMLSelectElement>);
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
