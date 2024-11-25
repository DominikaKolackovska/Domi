import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: '#1976d2',
        color: '#fff',
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2024 Rive File Viewer. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
