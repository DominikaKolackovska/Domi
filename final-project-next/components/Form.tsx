import React from 'react';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
  inputs: React.ReactNode[];
  submitButton: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ inputs, submitButton }) => {
  return (
    <form>
      <div>{inputs}</div>
      <div>{submitButton}</div>
    </form>
  );
};

export { Form };