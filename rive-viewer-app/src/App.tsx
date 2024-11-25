import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppContent from './components/App'; // Make sure this path matches casing.

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
