import React from 'react';
import { Switch, Stack, HStack, Text, SwitchProps } from '@chakra-ui/react';

interface CSwitchProps extends SwitchProps {
  label: string;
  errorText?: string;
}

const CSwitch = React.forwardRef<SwitchProps, CSwitchProps>((props, ref) => {
  const { label, errorText, ...rest } = props;

  return (
    <Stack w={'100%'} mt={{ sm: '2.5rem' }}>
      <HStack>
        <Text
          fontSize={'12px'}
          fontWeight={'600'}
          color={'rgba(18, 18, 89, 1)'}
          textTransform={'capitalize'}>
          {label}
        </Text>
        <Switch ref={ref} colorScheme='whatsapp' {...rest} />
      </HStack>

      {errorText && (
        <Text ml={1} fontSize={'11px'} fontWeight={'600'} color={'red.600'}>
          {errorText}
        </Text>
      )}
    </Stack>
  );
});

export default CSwitch;
