import React from 'react';
import { Typography, AppBar, Toolbar, Switch } from '@mui/material';
import { useTheme } from '../../context/ThemeContext'; // Correct path

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Rive Viewer</Typography>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
