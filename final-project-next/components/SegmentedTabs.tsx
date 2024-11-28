import React, { useState, useCallback } from 'react';
import styles from '@/styles/segmentedTabs.module.css';
import {Tab}  from '@/components/Tab';

interface TabItem {
  id: string;
  label: string;
}

type TabVariant = 'first' | 'middle' | 'last';

interface SegmentedTabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  variant?: TabVariant;
}



const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  tabs,
  defaultActiveTab = tabs[0]?.id,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      onChange?.(tabId);
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      let newIndex = currentIndex;

      switch (event.key) {
        case 'ArrowRight':
          newIndex = (currentIndex + 1) % tabs.length;
          break;
        case 'ArrowLeft':
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        default:
          return;
      }

      const newTabId = tabs[newIndex].id;
      handleTabClick(newTabId);
    },
    [activeTab, tabs, handleTabClick]
  );

  const getTabState = (index: number): TabVariant => {
    if (index === 0) return 'first';
    if (index === tabs.length - 1) return 'last';
    return 'middle';
  };

  return (
    <nav>
      <div
        className={styles.tabList}
        role="tablist"
        aria-label="Segmented tabs"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            state={getTabState(index)}
            onClick={handleTabClick}
          />
        ))}
      </div>
    </nav>
  );
};

export { SegmentedTabs } ;
