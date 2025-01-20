import React, { useState } from 'react';
import {
  Stack,
  Text,
  Input,
  InputProps,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import currencies from "./currencies.json";

const allCurrencies = Object.entries(currencies).map((([_code, _currency]) => {
  return {
    // label: _currency.symbol_native.replace(' ', '').trim(),
    label: _code,
    value: _code
  }
}));


interface CInputCurrencyProps extends InputProps {
  name: string;
  label?: string;
  value: any,
  onChange: (val: any) => void;
}

const CInputCurrency: React.FC<CInputCurrencyProps> = props => {
  const { label, value, onChange } = props;
  const [data, setData] = useState(() => {
    if (typeof value === "object" && value.value !== undefined) {
      const _value = value.value;
      console.log(_value);
      return {
        currency: _value.currency,
        amount: Number(_value.amount)
      }
    }
    return {
      currency: 'USD',
      amount: 0.0
    }
  })

  const onChangeCurrency = (e: any) => {
    const { value } = e.target;
    setData((prevState) => ({
      ...prevState,
      currency: value,
    }));
    onChange({
      type: 'currency',
      value: {
        currency: `${data.currency}`,
        amount: `${data.amount}`
      }
    })
  }

  const onChangeAmount = (e: any) => {
    const { value } = e.target;
    setData((prevState) => ({
      ...prevState,
      amount: value
    }));
    onChange({
      type: 'currency',
      value: {
        currency: `${data.currency}`,
        amount: `${data.amount}`
      }
    })
  }

  return (
    <Stack w={'100%'} h={'100%'}>
      <Text
        fontSize={'12px'}
        fontWeight={'600'}
        color={'rgba(18, 18, 89, 1)'}
        textTransform={'capitalize'}>
        {label}
      </Text>
      <InputGroup>
        <InputLeftElement h={'48px'} width='4.8rem' pl={'0.5rem'}>
          <Select
            h={'35px'}
            fontSize={'10px'}
            fontWeight={'bold'}
            placeholder='Select'
            bg={'rgba(18, 18, 89, 0.03)'}
            borderRadius={'10px'}
            border={'none'}
            _focus={{ border: 'none', boxShadow: 'none' }}
            _hover={{
              cursor: 'pointer',
              border: 'none',
              boxShadow: 'none',
            }}
            value={data.currency}
            onChange={onChangeCurrency}>
            {
              allCurrencies.map((_currency, index) => {
                return (
                  <option key={index} value={_currency.value}>
                    {_currency.label}
                  </option>
                )
              })
            }
          </Select>
        </InputLeftElement>
        <Input
          type='number'
          step={'any'}
          h={'48px'}
          pl='5.1rem'
          fontSize={'13px'}
          placeholder='Enter amount'
          boxShadow={'none'}
          bg={'rgba(18, 18, 89, 0.03)'}
          borderRadius={'10px'}
          _placeholder={{
            color: '#00000099',
          }}
          _focusVisible={{}}
          value={data.amount}
          onChange={onChangeAmount}
        />
      </InputGroup>
    </Stack>
  );
};

export default CInputCurrency;
