import React from 'react';
import styles from '@/styles/segmentedTabs.module.css';

type TabState = 'first' | 'middle' | 'last';
type TabVariant = 'primary' | 'secondary';

type TabItem = {
  id: string;
  label: string;
  isActive?: boolean;
  state?: TabState;

};

interface TabProps extends TabItem {
  onClick: (id: string) => void;
  variant?: TabVariant;
}

const Tab: React.FC<TabProps> = ({ id, label, isActive, state, onClick }) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(id);
    }
  };

  return (
    <button
      className={styles.tab}
      onClick={() => onClick(id)}
      onKeyDown={handleKeyDown}
      data-active={isActive}
      data-state={state}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      tabIndex={isActive ? 0 : -1}
    >
      {label}
    </button>
  );
};

export { Tab };
