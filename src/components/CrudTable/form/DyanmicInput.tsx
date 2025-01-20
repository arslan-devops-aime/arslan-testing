import React from 'react';
import { Box, Flex, HStack, Select, Stack, Switch, Text, Textarea } from "@chakra-ui/react";
import CInput from 'src/components/CInput';
import CDropzone from 'src/components/CDropzone';
import CInputCurrency from 'src/components/CInputCurrency';
import CSelect from 'src/components/CSelect';
import { FKSelect, ImagePicker } from '../inputs';
import { Axios } from 'axios';
import { Editor } from "@tinymce/tinymce-react";
import { FaInfo } from 'react-icons/fa';
interface DynamicInputProps {
    name: string;
    dataType: string;
    value: any;
    onChange: (value: any) => void;
    placeholder?: string;
    label?: string;
    options?: any[];
    axios?: Axios;
    labelKey?: string;
    endpoint?: string;
    helperText?: string;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ dataType, value, onChange, placeholder, label, name, helperText, options, labelKey, ...rest }) => {
    const handleInputChange = (value: any) => {
        onChange(value);
    };

    if(dataType === "date" && value !== ""){
        value = value.split("T")[0];
    }

    switch (dataType) {
        case "acturial":
        case 'text':
        case 'number':
        case 'date':
            return (
                <Box width={"100%"}>
                    <CInput
                    name={name}
                    type={dataType}
                    value={value}
                    placeholder={placeholder}
                    label={label ?? ""}
                    disabled={dataType === "acturial" ? true : false}
                    onChange={(e) => handleInputChange(e.target.value)}
                    helperText={helperText}
                />
                </Box>
            );
        // Add more cases for other data types as needed
        case 'switch':
            return (
                <Box>
                    <Flex gap={2}>
                        {label && <Text textTransform={'capitalize'}>{label}</Text>}
                        <Switch value={value} onChange={() => handleInputChange(!Boolean(value) ?? true)} />
                    </Flex>
                </Box>
            );
        case 'textarea':
            return (
                <Box width={"100%"}>
                    {label && <Text>{label}</Text>}
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
                    <Textarea value={value} name={name} onChange={(e) => handleInputChange(e.target.value)} />
                </Box>
            );
        case 'currency':
            return (
                <CInputCurrency name={name} label={label ?? ""} value={value} onChange={handleInputChange} />
            )
        case 'dropzone':
            return (
                <CDropzone label={label ?? ""} value={value} onChange={handleInputChange} helperText={helperText}/>
            )
        case 'select':
            return (
                <CSelect label={label ?? ""} helperText={helperText} value={value} options={options ?? []} onChange={(e: any) => handleInputChange(e.target.value)} />
            )
        case 'image':
            return (
                <ImagePicker label={label ?? ""} value={value} onChange={handleInputChange} />
            )
        case 'fk-select':
            return (
                <FKSelect label={label ?? ""} axios={rest.axios} value={value} labelKey={labelKey ?? ""} endpoint={rest.endpoint} onChange={handleInputChange} />
            )
        case 'rich-text-editor':
            return (
                <Box>
                    {label && <Text mb={'10px'}>{label}</Text>}
                    <Editor value={value} onEditorChange={handleInputChange} />
                </Box>
            )
        default:
            return null;
    }
};

export default DynamicInput;
