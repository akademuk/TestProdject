import React from 'react';
import './App.css';
import { ThemeProvider } from 'react-jss';

import { AppRoutes } from './routes';
import { Theme } from './shared/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
