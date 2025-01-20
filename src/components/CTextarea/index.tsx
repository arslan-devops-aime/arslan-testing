import React from 'react';
import { Stack, Text, Textarea, TextareaProps } from '@chakra-ui/react';

interface CTextareaProps extends TextareaProps {
  label: string;
  errorText?: string;
}

const CTextarea = React.forwardRef<TextareaProps, CTextareaProps>(
  (props, ref) => {
    const { label, errorText, ...rest } = props;

    return (
      <Stack w={'100%'} h={'100%'}>
        <Text
          fontSize={'12px'}
          fontWeight={'600'}
          color={'rgba(18, 18, 89, 1)'}
          textTransform={'capitalize'}>
          {label}
        </Text>
        <Textarea
          ref={ref}
          resize={'none'}
          fontSize={'13px'}
          placeholder='Enter text'
          boxShadow={'none'}
          bg={'rgba(18, 18, 89, 0.03)'}
          borderRadius={'10px'}
          _placeholder={{
            color: '#00000099',
          }}
          _focusVisible={{}}
          {...rest}
        />

        {errorText && (
          <Text ml={1} fontSize={'11px'} fontWeight={'600'} color={'red.600'}>
            {errorText}
          </Text>
        )}
      </Stack>
    );
  }
);

export default CTextarea;
