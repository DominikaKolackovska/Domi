import React, { useState } from 'react';
import styles from '@/styles/showcase.module.css';
import  { SelectInput }  from '@/components/SelectInput';
import { Tab }  from '@/components/Tab';

const SegmentedTabsPage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [variant, setVariant] = useState<'first' | 'middle' | 'last'>('first');

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsActive(e.target.value === 'true');
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as 'first' | 'middle' | 'last');
  };


  return (
    <div className={styles.showcase}>
      <div className={styles.containerPreview}>
        <div className={styles.preview}>
          <Tab
            id="tab"
            label="Tab"
            isActive={isActive}
            state={variant}
            onClick={() => console.log('Tab clicked')}
          />
        </div>
      </div>

      <h1 className={styles.showcaseTitle}>Try component by yourself</h1>

      <div className={styles.controlsShowcase}>
        <SelectInput
          label="Variant"
          value={variant}
          handleChange={handleVariantChange}
          options={[
            { value: 'first', label: 'First' },
            { value: 'middle', label: 'Middle' },
            { value: 'last', label: 'Last' },
          ]}
        />
        <SelectInput
          label="isActive"
          value={isActive.toString()}
          handleChange={handleStateChange}
          options={[
            { value: 'false', label: 'No' },
            { value: 'true', label: 'Yes' },
          ]}
        />
      </div>
    </div>
  );
};

export default SegmentedTabsPage;
