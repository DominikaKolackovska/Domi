import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/showcase.module.css';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { SelectInput } from '@/components/SelectInput';
import { TextArea } from '@/components/TextArea';

const ShowcasePage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [selectedOption, setSelectedOption] = useState<'type01' | 'type02' | 'type03' | ''>('');

  const optionLabels: { [key: string]: string } = {
    type01: 'Passed',
    type02: 'Very good job',
    type03: 'Really nice work! Keep going..',
  };

  const [text, setText] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.length < 3) {
      setError('Input must be at least 3 characters long.');
    } else {
      setError('');
    }
  };


  const handleSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value as 'type01' | 'type02' | 'type03');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!error  && selectedOption) {
      const selectedOptionLabel = optionLabels[selectedOption] || '';

      const templateParams = {
        name: inputValue,
        rating: selectedOptionLabel,
        text:text,
      };

      try {
        await emailjs.send(
          'service_fwvqmhj',
          'template_0a987xt',
          templateParams,
          'j6AUPmZxhWWpWwk1O'
        );
        alert('Your rating has been sumbitted successfully!');
      } catch (error) {
        console.error('Failed to send rating:', error);
        alert('Failed to send rating. Please try again later.');
      }
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const isFormValid =
    !error &&
    inputValue.length >= 3 &&
    text &&
    selectedOption;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>A0</h1>
        <h1 className={styles.subtitle}>placeholder</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.showcaseDemo}>
          <div className={styles.containerPreviewShowcase}></div>
          <h1 className={styles.showcaseTitle}>Try component by yourself</h1>
          <div className={styles.controlsShowcase}>
            <div className={styles.wrapperShowcase}>
              <div className={styles.error}>
                <form onSubmit={handleSubmit}>

                  <SelectInput
                    label="How would you rate this task?"
                    value={selectedOption}
                    handleChange={handleSelectedOption}
                    options={[
                      { value: 'type01', label: 'Passed' },
                      { value: 'type02', label: 'Very good job' },
                      { value: 'type03', label: 'Really nice work!' },
                    ]}
                  />
                  <TextInput
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    label="Name"
                    error={error}
                  />

                  <TextArea
                    value={text}
                    onChange={setText}
                    placeholder="Write additional comments"
                    label="Additional comments"
                    rows={5}
                    disabled={false}
                  />
                  <div className={styles.buttonSticky}>
                    <Button label="Submit" disabled={!isFormValid} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
