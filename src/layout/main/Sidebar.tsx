import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Box, Stack, Text, Button } from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { FaLongArrowAltUp, FaSignOutAlt } from 'react-icons/fa';
import { useAppContext } from 'src/app/AppContext';

export type SideBarItemT = {
  label: string;
  path: string;
};

interface SidebarI {
  sideBarItems: Array<SideBarItemT>;
}

const Sidebar = ({ sideBarItems }: SidebarI) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { user } = useAppContext();

  const onLogoutUser = () => {
    user.logoutUser();
  }

  return (
    <Stack
      position={'sticky'}
      top={0}
      left={0}
      w={isCollapsed ? '100px' : '218px'}
      minW={isCollapsed ? '100px' : '218px'}
      h={'93%'}
      bg={'white'}
      borderRadius={'20px'}
      p={'26px 2px 8px 0px'}
      transition={'width 0.2s'}
      boxShadow={'0px 0px 24px 0px rgba(0, 0, 0, 0.15)'}
    >
      <Box position={'relative'} h="100%">
        <Text fontWeight={800} px={'24px'}>
          BOP
        </Text>
        <Flex
          as="span"
          justifyContent={'center'}
          alignItems={'center'}
          bg="white"
          height={'42px'}
          w="42px"
          position={'absolute'}
          top="50px"
          left={isCollapsed ? '70px' : '202px'}
          borderRadius={'100%'}
          boxShadow={'0px 8px 12px 0px rgba(18, 18, 89, 0.03)'}
          transition={'transform 0.3s'}
          cursor={'pointer'}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <Box
            as="span"
            display={'inherit'}
            transition={'transform 0.3s'}
            transform={!isCollapsed ? 'rotate(90deg)' : 'rotate(270deg)'}
          >
            <HiChevronDown size={'1.5rem'} />
          </Box>
        </Flex>
        <Stack
          maxH={'calc(100% - 70px)'} // Adjust to leave space for the logout button
          mt={'35px'}
          pb={'50px'}
          overflowY={'auto'}
          sx={{
            '&::-webkit-scrollbar': { width: '8px' },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
              borderRadius: '20px',
            },
          }}
        >
          {sideBarItems.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => (
                <Text
                  py={'8px'}
                  px={'24px'}
                  fontWeight={'700'}
                  fontSize={'14px'}
                  color={'primary.100'}
                  borderLeft={isActive ? '4px solid' : ''}
                  borderColor={'green.100'}
                  _hover={{ textDecoration: 'underline' }}
                >
                  {isCollapsed ? `${item.label.slice(0, 3)}...` : item.label}
                </Text>
              )}
            </NavLink>
          ))}
        </Stack>

        {/* Logout Button Positioned at the Bottom */}
        <Box
          position={'absolute'}
          bottom={0}
          left={0}
          right={0}
          p={'12px 24px'}
        >
          <Button w={'100%'} leftIcon={<FaSignOutAlt />} onClick={onLogoutUser}>
            Logout
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Sidebar;
