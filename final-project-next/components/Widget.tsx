import React from 'react';
import styles from '@/styles/widget.module.css';
import {Button} from '@/components/Button';

interface WidgetProps {
  title: string;
  description: string;
  button?: boolean;
  onButtonClick?: () => void;
  buttonLabel: string;
}

const Widget: React.FC<WidgetProps> = ({ title, description, button = true, onButtonClick, buttonLabel }) => {
  return (
    <div className={styles.widget}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {button && (
        <Button
          label={buttonLabel}
          onClick={onButtonClick || (() => alert('Button clicked!'))}
        />
      )}
    </div>
  );
};

export { Widget };