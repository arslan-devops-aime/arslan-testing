import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Stack
      bg={'white.50'}
      w={'100%'}
      h={'100vh'}
      minH={'100vh'}
      p={'24px'}
      spacing={'52px'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
