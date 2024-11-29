import React, { useState } from 'react';
import styles from '@/styles/showcase.module.css';
import { SegmentedTabs }  from '@/components/SegmentedTabs';
import  ButtonPage  from '@/pages/button';
import  SelectInputPage  from '@/pages/selectInput';
import  SegmentedTabsPage  from '@/pages/tabs';

const ComponentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabs = [
    { id: 'tab1', label: 'Button' },
    { id: 'tab2', label: 'Select Input' },
    { id: 'tab3', label: 'Tabs' },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        <h1 className={styles.title}>A0</h1>
        <h1 className={styles.subtitle}>placeholder</h1>
      </div>
      <div className={styles.contentContainer}>
        <SegmentedTabs
          tabs={tabs}
          defaultActiveTab="tab1"
          onChange={handleTabChange}
        />
        <div className={styles.content}>
          {activeTab === 'tab1' && <ButtonPage />} 
          {activeTab === 'tab2' && <SelectInputPage/>} 
          {activeTab === 'tab3' && <SegmentedTabsPage/>} 

        </div>
        
      </div>
    </div>
  );
};

export default ComponentsPage;
