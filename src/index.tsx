import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { App } from 'components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Open Sans, sans serif',
        spacing: {
          xs: '1rem',
          sm: '1.2rem',
          md: '1.8rem',
          lg: '2.2rem',
          xl: '2.8rem',
        },
        colors: {
          tealOpacity: ['#00808024'],
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
