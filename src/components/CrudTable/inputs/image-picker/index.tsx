import React, { useRef, ChangeEvent, useState, useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { FaCamera } from 'react-icons/fa';
import { isFileObject, isString } from '../..';

const BACKEND = `${import.meta.env.VITE_BACKEND_URL}`;

interface ImagePickerProps {
    label: string;
    value: any;
    onChange: (val: any) => void;
}

export default function ImagePicker({ label, value, onChange }: ImagePickerProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleClick = () => {
        // Trigger a click on the hidden input element
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            onChange({ type: 'image', value: selectedFile })
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreviewImage(null);
        }
    };

    useEffect(() => {
        const loadImage = () => {
            console.log(value);
            if (isFileObject(value)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result as string);
                };
                reader.readAsDataURL(value.value);
            } else if (isString(value)) {
                setPreviewImage(`${BACKEND}/${value}`);
            }
        }
        loadImage();
    }, [value]);

    return (
        <Box>
            <Text
                fontSize={'12px'}
                fontWeight={'600'}
                color={'rgba(18, 18, 89, 1)'}
                textTransform={'capitalize'}
                mb={'10px'}>
                {label}
            </Text>
            <label htmlFor="imageInput">
                <Box
                    bgColor={'#ededed'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection="column"
                    gap={2}
                    height={'150px'}
                    width={'150px'}
                    border={'1px dashed grey'}
                    borderRadius={'5px'}
                    cursor="pointer"
                    overflow={'hidden'}
                    onClick={handleClick}
                >
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="Selected"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    ) : (
                        <>
                            <FaCamera color={"#b5b1b1"} />
                            <Text fontSize={'10px'} color={"#000"}>Select An Image</Text>
                        </>
                    )}
                </Box>
            </label>
            <input
                id="imageInput"
                type="file"
                // accept="image/*"
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={handleFileChange}
            />
        </Box>
    );
}
