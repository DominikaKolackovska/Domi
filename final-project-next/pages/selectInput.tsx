import React, { useState } from 'react';
import styles from '@/styles/showcase.module.css';
import  { SelectInput } from '@/components/SelectInput';

const SelectInputPage: React.FC = () => {
  const [state, setState] = useState<'default' | 'success' | 'error'>('default');
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value as 'default' | 'success' | 'error');
  };

  const handleDisabledChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisabled(e.target.value === 'true');
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.containerPreview}>
        <div className={styles.preview}>
          <div className={styles.controls}>
            <SelectInput
              label="State"
              value={state}
              disabled={disabled}
              state={state}
              handleChange={handleVariantChange}
              className={`${state === 'success' ? styles.success : ''} ${
                state === 'error' ? styles.error : ''
              }`}
              options={[
                { value: 'default', label: 'Default' },
                { value: 'success', label: 'Success' },
                { value: 'error', label: 'Error' },
              ]}
            />
          </div>
        </div>
      </div>

      <h1 className={styles.showcaseTitle}>Try component by yourself</h1>
      <div className={styles.controlsShowcase}>
        <SelectInput
          label="State"
          value={state}
          handleChange={handleVariantChange}
          options={[
            { value: 'default', label: 'Default' },
            { value: 'success', label: 'Success' },
            { value: 'error', label: 'Error' },
          ]}
        />
        

        <SelectInput
          label="Disabled"
          value={disabled ? 'true' : 'false'}
          handleChange={handleDisabledChange}
          state="default"
          options={[
            { value: 'false', label: 'No' },
            { value: 'true', label: 'Yes' },
          ]}
        />
      </div>
    </div>
  );
};

export default SelectInputPage ;
