import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'; // Correct imports
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App: React.FC = () => {
  const theme = createTheme({
    // Define your theme settings here
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Header />
        <MainContent onStateMachinesLoaded={(stateMachines: string[]) => console.log(stateMachines)} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
