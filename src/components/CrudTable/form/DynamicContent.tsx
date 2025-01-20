import { Image, Stack } from '@chakra-ui/react';
import React from 'react'
import { isValidObjectId } from '../utils';
import FKData from './FKData';
import { Axios } from 'axios';

interface DynamicContentProps {
    // content: string | boolean | Record<string, any> | undefined;
    content: any;
    dataType?: string;
    attributes?: any;
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function DynamicContent({ content, dataType, attributes }: DynamicContentProps) {
    if(dataType === "fk-select"){
        return (
            <FKData value={content} {...attributes}/>
        )
    }
    if (typeof content === 'string') {
        return content;
    } else if (typeof content === 'boolean') {
        return content ? 'TRUE' : 'FALSE';
    } else if (typeof content === 'object') {
        const { type, value } = content;
        if (type) {
            switch (type) {
                case 'currency':
                    return `${value.currency} ${value.amount}`;
                case 'image':
                    return value !== undefined ?
                        <Stack as="a" href={`${BASE_URL}/${value}`} target='_blank'>
                            <Image src={`${BASE_URL}/${value}`} width={50} height={50} objectFit={'cover'} />
                        </Stack>
                        :
                        <Stack></Stack>
                default:
                    return '';
            }
        }
    }
    return content ?? '';
}
