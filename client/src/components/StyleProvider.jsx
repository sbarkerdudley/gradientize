import theme from '../styles/theme';
import React from 'react';
import { MantineProvider } from '@mantine/core';

export default function StyleProvider({ children }) {
  return (
    <MantineProvider withGlobalStyles theme={theme}>
      {children}
    </MantineProvider>
  )
};
