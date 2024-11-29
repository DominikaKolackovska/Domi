import React, { useState } from 'react';
import styles from '@/styles/showcase.module.css';
import { TextInput } from '@/components/TextInput';
import { Button }  from '@/components/Button';
import { SelectInput }  from '@/components/SelectInput';

const TextInputPage: React.FC = () => {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [error1, setError1] = useState<string>('');

  const [inputValue2, setInputValue2] = useState<string>('');
  const [error2, setError2] = useState<string>('');

  const [selectedOption, setSelectedOption] = useState<'type01' | 'type02' | 'type03' | ''>('');

  const optionLabels: { [key: string]: string } = {
    type01: 'Passed',
    type02: 'Very good job',
    type03: 'Really nice work! Keep going..',
  };

  const handleInputChange1 = (value: string) => {
    setInputValue1(value);
    if (value.length < 3) {
      setError1('Input must be at least 3 characters long.');
    } else {
      setError1('');
    }
  };

  const handleInputChange2 = (value: string) => {
    setInputValue2(value);
    if (value.length < 3) {
      setError2('Input must be at least 3 characters long.');
    } else {
      setError2('');
    }
  };

  const handleSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value as 'type01' | 'type02' | 'type03');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!error1 && !error2 && selectedOption) {
      const selectedOptionLabel = optionLabels[selectedOption] || '';

      alert(`Submitted:\n Rating:${selectedOptionLabel}\n ${inputValue1}\n ${inputValue2}`);
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const isFormValid =
    !error1 &&
    !error2 &&
    inputValue1.length >= 3 &&
    inputValue2.length >= 3 &&
    selectedOption;

    return (
      <div className={styles.showcase}>
        <div className={styles.containerPreviewShowcase}></div>
        <h1 className={styles.showcaseTitle}>Try component by yourself</h1>
        <div className={styles.controlsShowcase}>
        <form onSubmit={handleSubmit}>
          <SelectInput
            label="How would you rate this task?"
            value={selectedOption}
            handleChange={handleSelectedOption}
            options={[
              { value: 'type01', label: 'Passed' },
              { value: 'type02', label: 'Very good job' },
              { value: 'type03', label: 'Really nice work! Keep going..' },
            ]}
          />

          <div className={styles.error}>
            <TextInput
              value={inputValue1}
              onChange={handleInputChange1}
              placeholder="Your name"
              label="Name"
              error={error1}
            />

            <TextInput
              value={inputValue2}
              onChange={handleInputChange2}
              placeholder="Write additional comments"
              label="Additional comments"
              error={error2}
            />
          </div>
          <Button label="Submit" disabled={!isFormValid} />
        </form>
        </div>
      </div>
    );
  };
  

export default TextInputPage;
