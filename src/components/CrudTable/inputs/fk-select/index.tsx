import { Stack, Text } from '@chakra-ui/react';
import { Axios } from 'axios'
import React, { useState } from 'react'
import ReactSelect from 'react-select';

interface FKSelectProps {
    label: string;
    axios: Axios | undefined;
    labelKey: string;
    value: string;
    endpoint?: string;
    onChange: (value: any) => void;
}
export default function FKSelect({ value, label, labelKey, axios, endpoint, onChange }: FKSelectProps) {
    const [options, setOptions] = useState([]);

    const [selectedValue, setSelectedValue] = useState<any>({
        label: '',
        value: value
    });

    const onChangeValue = (val: any) => {
        onChange(val.value);
        setSelectedValue(val);
    }

    const loadOptions = async () => {
        console.log(value);
        if (axios !== undefined) {
            try {
                const response = await axios.get(`${endpoint}`);
                const result = response.data;
                const _options = result.map((_option: any) => {
                    if(_option._id === selectedValue.value){
                        setSelectedValue({
                            label: _option[labelKey] ?? "NA",
                            value: _option._id
                        });
                    }
                    return {
                        label: _option[labelKey] ?? "NA",
                        value: _option._id
                    }
                });
                setOptions(_options);
            } catch (error) {
                console.log("🔴 Error:", error);
            }
        }
    }

    React.useEffect(() => {
        loadOptions();
    }, []);

    return (
        <Stack>
            {label && <Text>{label}</Text>}
            <ReactSelect value={selectedValue} options={options} onChange={onChangeValue} />
        </Stack>
    )
}
