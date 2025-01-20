import { HStack, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import sideBarItems from './routes.json';

const MainLayout = () => {
  return (
    <HStack
      bg={'white.50'}
      w={'100%'}
      h={'100vh'}
      minH={'100vh'}
      p={'24px'}
      spacing={'52px'}
      alignItems={'flex-start'}>
      <Sidebar sideBarItems={sideBarItems} />
      <Box h={'100%'} flex={1} overflowX={'auto'}>
        <Outlet />
      </Box>
    </HStack>
  );
};

export default MainLayout;
