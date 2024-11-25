// File uploading component

import React, { ChangeEvent } from 'react';
import { Button } from '@mui/material';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.riv')) {
      onFileSelect(file);
    } else {
      alert('Please upload a valid .riv file');
    }
  };

  return (
    <Button variant="contained" component="label">
      Upload .riv File
      <input
        type="file"
        accept=".riv"
        hidden
        onChange={handleFileInput}
      />
    </Button>
  );
};

export default FileUploader;
