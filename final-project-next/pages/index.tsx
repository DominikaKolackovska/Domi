
import React, { useState } from 'react';
import { Button } from '../components/Button';
import styles from '../styles/showcase.module.css';


const Showcase: React.FC = () => {
  const [variant, setVariant] = useState<'primary' | 'secondary'>('primary');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [disabled, setDisabled] = useState<boolean>(false);


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>A0</h1>
        <h1 className={styles.subtitle}>Design system</h1>
      </div>
      <div className={styles.showcase}>
        <div className={styles.containerPreview}>
          <div className={styles.preview}>
            <Button variant={variant} size={size} disabled={disabled}>
              {variant === 'primary' ? 'Primary Button' : 'Secondary Button'}
            </Button>
          </div>
        </div>
        <h1 className={styles.showcaseTitle}>Try component by yourself</h1>
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label htmlFor="variant" className={styles.label}>
              Variant
            </label>
            <select
              id="variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value as 'primary' | 'secondary')}
              className={styles.select}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
            </select>
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="size" className={styles.label}>
              Size
            </label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value as 'small' | 'medium' | 'large')}
              className={styles.select}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className={styles.checkbox}
              />
              Disabled?
            </label>
          </div>
        </div>  
      </div> 
    </div>

    

  );
};

export default Showcase;
