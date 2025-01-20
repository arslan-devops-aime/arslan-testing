import { Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CButton from 'src/components/CButton';

const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <Stack
      bg={'gray.100'}
      w={'100%'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={'24px'}>
      <Stack alignItems={'center'} spacing={'8px'}>
        <Text variant={'large'}>Oops! 404</Text>
        <Text>The page you were looking for doesnot exist.</Text>
      </Stack>

      <CButton title='Back To Home' active onClick={() => navigate('/')} />
    </Stack>
  );
};

export default NoPageFound;
