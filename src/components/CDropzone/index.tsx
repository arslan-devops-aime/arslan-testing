import React, { useCallback, useMemo, useState } from 'react';
import { Stack, Text, Box, HStack, Image } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { HiMiniXMark, HiOutlineDocument } from 'react-icons/hi2';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 10,
  borderColor: '#E4E4EF',
  borderStyle: 'dashed',
  backgroundColor: 'rgba(18, 18, 89, 0.03)',
  color: '#00000099',
  fontSize: 13,
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#121259',
};

const acceptStyle = {
  borderColor: '#87FC70',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const MAX_NUMBER_OF_FILES = 10;

interface CDropzoneProps {
  label: string;
  helperText?: string;
  value: any;
  onChange: (value: any) => void;
}

const CDropzone: React.FC<CDropzoneProps> = ({ label, helperText, onChange }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (droppedFiles: File[]) => {
      const newFiles = [...files, ...droppedFiles].slice(0, MAX_NUMBER_OF_FILES);
      setFiles(newFiles);
      onChange({
        type: 'dropzone',
        value: newFiles
      });
    },
    [files]
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    maxFiles: MAX_NUMBER_OF_FILES - files.length,
    onDrop
    // ,
    // accept: {
    //   'image/*': [],
    // },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const handleFileRemove = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange({
      type: 'dropzone',
      value: newFiles
    });
  };

  return (
    <Stack w={'100%'}>
      <Text fontSize={'12px'} fontWeight={'600'} color={'primary.100'} textTransform={'capitalize'}>
        {label}
      </Text>
      <Stack aria-label='dropzone-container'>
        <Stack aria-label='dropzone' p={'1rem'} bg={'rgba(18, 18, 89, 0.03)'} borderRadius={'10px'}>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>{MAX_NUMBER_OF_FILES - files.length} files remaining</em>
          </div>
        </Stack>
      </Stack>

      {files.length > 0 && (
        <Stack>
          <Text fontSize={'12px'} fontWeight={'600'} color={'primary.100'} textTransform={'capitalize'}>
            Files
          </Text>
          <HStack flexWrap={'wrap'}>
            {files.map((file, index) => (
              <Stack
                key={index}
                w={'3.8rem'}
                maxW={'3.8rem'}
                h={'3.25rem'}
                maxH={'3.25rem'}
                py={'0.3rem'}
                spacing={'2px'}
                pos={'relative'}
                borderRadius={'5px'}
                alignItems={'center'}
                justifyContent={'space-between'}
                bg={'rgba(18, 18, 89, 0.03)'}
              >
                <Box
                  as={HiMiniXMark}
                  width={'0.9rem'}
                  height={'0.9rem'}
                  pos={'absolute'}
                  top={'0.2rem'}
                  right={'0.2rem'}
                  alignSelf={'flex-end'}
                  color={'red.500'}
                  cursor={'pointer'}
                  onClick={() => handleFileRemove(index)}
                />
                {file.type.startsWith('image/') ? (
                  <Image src={URL.createObjectURL(file)} alt={file.name} boxSize="1.6rem" />
                ) : (
                  <Box as={HiOutlineDocument} color={'primary.100'} width={'1.6rem'} height={'1.6rem'} />
                )}
                <Text
                  fontSize={'8px'}
                  fontWeight={'600'}
                  color={'primary.100'}
                  textTransform={'capitalize'}
                >
                  {file.name.length > 10 ? `${file.name.slice(0, 9)}...` : file.name}
                </Text>
              </Stack>
            ))}
          </HStack>
        </Stack>
      )}

      {helperText && <Text fontSize={'12px'} color={'gray.500'}>{helperText}</Text>}
    </Stack>
  );
};

export default CDropzone;
