import 'src/styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { theme } from 'src/styles/theme';
import AppRoutes from 'src/app/routes';
import { AppProvider } from 'src/app/AppContext';

function App() {
  const { ToastContainer } = createStandaloneToast();

  return (
    <BrowserRouter>
      <ToastContainer />
      <ChakraProvider theme={theme}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
