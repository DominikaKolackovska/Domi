import React, { useState } from 'react';
import  { Button }  from '@/components/Button';
import styles from '@/styles/showcase.module.css';
import  { SelectInput }  from '@/components/SelectInput';

const ButtonPage: React.FC = () => {
  const [variant, setVariant] = useState<'primary' | 'secondary'>('primary');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as 'primary' | 'secondary');
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as 'small' | 'medium' | 'large');
  };

  const handleDisabledChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisabled(e.target.value === 'true');
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.containerPreview}>
        <div className={styles.preview}>
          <Button variant={variant} size={size} disabled={disabled}>
            {variant === 'primary' ? 'Primary Button' : 'Secondary Button'}
          </Button>
        </div>
      </div>

      <h1 className={styles.showcaseTitle}>Try component by yourself</h1>

      <div className={styles.controlsShowcase}>
        <SelectInput
          label="Variant"
          value={variant}
          handleChange={handleVariantChange}
          options={[
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
          ]}
        />
        <SelectInput
          label="Size"
          value={size}
          handleChange={handleSizeChange}
          options={[
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
          ]}
        />
        <SelectInput
          label="Disabled"
          value={disabled.toString()}
          handleChange={handleDisabledChange}
          options={[
            { value: 'false', label: 'No' },
            { value: 'true', label: 'Yes' },
          ]}
        />
      </div>
    </div>
  );
};

export default ButtonPage;