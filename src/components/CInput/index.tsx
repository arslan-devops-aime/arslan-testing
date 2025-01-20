import React from 'react';
import { Input, Stack, Text, InputProps, HStack } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';

interface CInputProps extends InputProps {
  label: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
}

const CInput = React.forwardRef<InputProps, CInputProps>((props, ref) => {
  const { label, errorText, disabled, helperText, ...rest } = props;

  return (
    <Stack w={'100%'} h={'100%'}>
      <Text
        fontSize={'12px'}
        fontWeight={'600'}
        color={'rgba(18, 18, 89, 1)'}
        textTransform={'capitalize'}>
        {label}
      </Text>
      {
        helperText &&
        <HStack alignItems={'top'}>
          <Stack background={'#ededed'} p={'5px'} borderRadius={'5px'} mb={'auto'}>
            <FaInfo style={{ fontSize: '8px' }} />
          </Stack>
          <Text fontSize={'10px'}>

            {helperText}
          </Text>
        </HStack>
      }
      <Input
        ref={ref}
        h={'48px'}
        fontSize={'13px'}
        placeholder='Enter text'
        boxShadow={'none'}
        bg={'rgba(18, 18, 89, 0.03)'}
        borderRadius={'10px'}
        disabled={disabled ?? false}
        _placeholder={{
          color: '#00000099',
        }}
        _focusVisible={{}}
        {...rest}
      />
      {errorText && (
        <Text ml={1} fontSize={'11px'} fontWeight={'700'} color={'red.600'}>
          {errorText}
        </Text>
      )}
    </Stack>
  );
});

export default CInput;
