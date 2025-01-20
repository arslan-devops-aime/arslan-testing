import { Stack, Text } from '@chakra-ui/react';
import ReactSelect, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponent = makeAnimated();

export type OptionType = {
  value: string;
  label: string;
};

interface CDropdownProps {
  label: string;
  options: Array<OptionType>;
  value: OptionType | Array<OptionType>;
  onChange: (value: OptionType | Array<OptionType> | any) => void;
  errorText?: string;

  [rest: string]: any;
}

const CDropdown = (props: CDropdownProps) => {
  const { label, options, value, onChange, errorText, ...rest } = props;

  const styles: StylesConfig = {
    container: (provided, state) => ({
      ...provided,
      opacity: state.isDisabled ? 0.7 : 1,
    }),
    control: provided => ({
      ...provided,
      minHeight: '48px',
      background: 'rgba(18, 18, 89, 0.03)',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '10px',
      fontSize: '13px',
    }),

    singleValue: provided => ({
      ...provided,
      padding: '0rem 0.5rem',
      fontSize: '0.8rem',
      lineHeight: 1,
      color: '#121259',
    }),

    input: provided => ({
      ...provided,
      padding: '0rem 0.5rem',
      fontSize: '13px',
      lineHeight: 1,
      color: '#121259',
    }),

    placeholder: provided => ({
      ...provided,
      padding: '0rem 0.5rem',
      fontSize: '13px',
      lineHeight: 1,
      color: '#a39f9f',
    }),

    noOptionsMessage: provided => ({
      ...provided,
      fontSize: '13px',
    }),

    loadingMessage: provided => ({
      ...provided,
      fontSize: '13px',
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '13px',
      color: state.isSelected ? '#fff' : '#344767',
      background: state.isSelected
        ? '#8392ab'
        : state.isFocused
        ? '#dee2e6'
        : 'transparent',

      '&:active': {
        background: '#f4f4f4',
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: provided => ({
      ...provided,
      color: '#121259',
      '&:hover': {
        color: '#121259',
      },
    }),
    clearIndicator: provided => ({
      ...provided,
      color: '#121259',
      '&:hover': {
        color: '#121259',
      },
    }),
  };

  return (
    <Stack>
      <Text
        fontSize={'12px'}
        fontWeight={'600'}
        color={'primary.100'}
        textTransform={'capitalize'}>
        {label}
      </Text>

      <ReactSelect
        styles={styles}
        options={options}
        closeMenuOnSelect={true}
        components={animatedComponent}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <Text ml={1} fontSize={'11px'} fontWeight={'600'} color={'red.600'}>
        {errorText}
      </Text>
    </Stack>
  );
};

export default CDropdown;
