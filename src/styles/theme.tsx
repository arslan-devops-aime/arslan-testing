import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#121259',
    },
    white: {
      50: '#F7F7F7',
      100: '#FFFEFE',
    },
    black: {
      100: '#000000',
    },
    gray: {
      100: 'rgba(247, 247, 247, 1)',
      200: '#E4E4EF',
    },
    // ... other colors
    green: { 100: '#87FC70' },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
  // ... other customizations
});
