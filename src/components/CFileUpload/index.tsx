import React from 'react';
import {
  Stack,
  HStack,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import CButton from '../CButton';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { HiOutlinePencilSquare, HiOutlineXMark } from 'react-icons/hi2';
import { ObjectType } from 'src/types/common';

interface CFileUploadProps extends InputProps {
  name: string;
  label: string;
  accept: 'image' | 'Doc';
  validationProps?: RegisterOptions;
}

const docFiles = '.doc,.docx,.txt,.pdf';
const imgFiles = 'image/*';

const CFileUpload = (props: CFileUploadProps) => {
  const { name, label, accept, validationProps, ...rest } = props;

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const watchFileUploader: ObjectType<string> = watch(name);
  const watchFilename = watchFileUploader && watchFileUploader.value;

  const uploadInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (name) register(name, validationProps);
  }, [name, register, validationProps]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setValue(name, {
        type: 'image',
        value: file.name,
        file,
      } as ObjectType<string>);
    }
  };

  const handlefileRemove = () => {
    setValue(name, {
      type: 'image',
      value: '',
    } as ObjectType<string>);
  };

  return (
    <Stack>
      <Text
        fontSize={'12px'}
        fontWeight={'600'}
        color={'rgba(18, 18, 89, 1)'}
        textTransform={'capitalize'}>
        {label}
      </Text>
      <InputGroup>
        <Input
          h={'48px'}
          pr='4.3rem'
          fontSize={'13px'}
          placeholder='Pick a file'
          boxShadow={'none'}
          bg={'rgba(18, 18, 89, 0.03)'}
          borderRadius={'10px'}
          readOnly
          _placeholder={{
            color: '#00000099',
          }}
          _focusVisible={{}}
          {...rest}
          value={watchFilename}
        />
        <input
          ref={uploadInputRef}
          type='file'
          accept={accept === 'image' ? imgFiles : docFiles}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <InputRightElement
          h={'48px'}
          width='4rem'
          pr={'0.5rem'}
          justifyContent={'flex-end'}>
          {watchFilename ? (
            <HStack
              spacing={'5px'}
              sx={{
                '& > svg': {
                  cursor: 'pointer',
                  fontSize: '1.15rem',
                  '&:nth-of-type(1)': { color: 'green.500' },
                  '&:nth-of-type(2)': { color: 'red.500' },
                },
              }}>
              <Box
                as={HiOutlinePencilSquare}
                onClick={() =>
                  uploadInputRef.current && uploadInputRef.current.click()
                }
              />
              <Box as={HiOutlineXMark} onClick={handlefileRemove} />
            </HStack>
          ) : (
            <CButton
              title='Select'
              active
              h='1.75rem'
              fontSize={'12px'}
              onClick={() =>
                uploadInputRef.current && uploadInputRef.current.click()
              }
            />
          )}
        </InputRightElement>
      </InputGroup>

      {errors[name] && (
        <Text ml={1} fontSize={'11px'} fontWeight={'600'} color={'red.600'}>
          {`${errors[name]!.message}`}
        </Text>
      )}
    </Stack>
  );
};

export default CFileUpload;
