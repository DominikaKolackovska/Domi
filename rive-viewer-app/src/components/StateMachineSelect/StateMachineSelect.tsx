// Selection of exact statemachine

import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography, SelectChangeEvent } from '@mui/material';

interface StateMachineSelectProps {
  stateMachines: string[];
  onSelectStateMachine: (stateMachine: string) => void;
}

const StateMachineSelect: React.FC<StateMachineSelectProps> = ({ stateMachines, onSelectStateMachine }) => {
  const [selectedStateMachine, setSelectedStateMachine] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const stateMachine = event.target.value as string;
    setSelectedStateMachine(stateMachine);
    onSelectStateMachine(stateMachine);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select State Machine</InputLabel>
      <Select
        value={selectedStateMachine}
        onChange={handleChange}
        label="Select State Machine"
      >
        {stateMachines.map((stateMachine, index) => (
          <MenuItem key={index} value={stateMachine}>
            {stateMachine}
          </MenuItem>
        ))}
      </Select>
      {selectedStateMachine && (
        <Typography variant="body1" mt={2}>
          Functionalities for: {selectedStateMachine}
        </Typography>
      )}
    </FormControl>
  );
};

export default StateMachineSelect;
