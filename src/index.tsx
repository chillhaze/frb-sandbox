import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { App } from 'components';
import { initializeApp } from 'firebase/app';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from 'firebaseConfig';

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={app}>
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
    </FirebaseAppProvider>
  </React.StrictMode>,
);
