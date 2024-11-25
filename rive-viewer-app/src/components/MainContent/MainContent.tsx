import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import FileUploader from '../FileUploader';
import RiveViewer from '../RiveViewer';  // Correct import
import StateMachineSelect from '../StateMachineSelect'; // Correct import

interface MainContentProps {
  onStateMachinesLoaded: (stateMachines: string[]) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onStateMachinesLoaded }) => {
  const [riveFile, setRiveFile] = useState<File | null>(null);
  const [selectedStateMachine, setSelectedStateMachine] = useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Upload a .riv file and select a state machine to interact with.
      </Typography>
      <FileUploader onFileSelect={(file) => setRiveFile(file)} />
      {riveFile && (
        <Box mt={4}>
          <RiveViewer riveFile={riveFile} onStateMachinesLoaded={onStateMachinesLoaded} />
          <StateMachineSelect />
        </Box>
      )}
    </Container>
  );
};

export default MainContent;
