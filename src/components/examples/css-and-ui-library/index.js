import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import CssAndUILibrary from './css-and-ui-library';

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <CssAndUILibrary />
  </ThemeProvider>
);

export default App;
