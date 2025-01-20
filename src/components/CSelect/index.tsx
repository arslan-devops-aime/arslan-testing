import React from 'react';
import { Select, Stack, Text, SelectProps, HStack } from '@chakra-ui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FaInfo } from 'react-icons/fa';

export type SelectOptionsT = {
  label: string;
  value: string;
}[];

interface CSelectProps extends SelectProps {
  label: string;
  options: SelectOptionsT;
  errorText?: string;
  onChange: (e: any) => void;
  value: string | number;
  helperText?: string;
}

const CSelect = React.forwardRef<SelectProps, CSelectProps>((props) => {
  const { label, value, options, errorText, helperText, onChange } = props;

  return (
    <Stack>
      <Text
        fontSize={'12px'}
        fontWeight={'600'}
        color={'primary.100'}
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
      <Select
        h={'48px'}
        fontSize={'13px'}
        placeholder='Select'
        bg={'rgba(18, 18, 89, 0.03)'}
        borderRadius={'10px'}
        border={'none'}
        icon={<HiOutlineChevronDown size={'12px'} />}
        _focus={{ border: 'none', boxShadow: 'none' }}
        _hover={{
          cursor: 'pointer',
          border: 'none',
          boxShadow: 'none',
        }}
        value={value}
        onChange={onChange}
      >
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Text ml={1} fontSize={'11px'} fontWeight={'600'} color={'red.600'}>
        {errorText}
      </Text>
    </Stack>
  );
});

export default CSelect;
