import { Axios } from 'axios';
import React, { useState } from 'react'

interface FKDataProps {
    labelKey: string;
    endpoint: string;
    axios: Axios;
    value: string;
}

export default function FKData({ axios, endpoint, labelKey, value }: FKDataProps) {
    const [content, setContent] = React.useState<any>(undefined);

    const loadData = async () => {
        try {
            // Ensure that labelKey and value are correctly set
            if (!labelKey || !value) {
                console.error("labelKey or value is undefined or invalid");
                return;
            }

            // Debug: Log the params before making the request
            console.log("Sending request with params:", {
                [labelKey]: value
            });

            const response = await axios.get(`${endpoint}/getByparam`, {
                params: {
                    '_id': value
                }
            });

            const result = response.data; // Accessing the actual data

            console.log("Response received:", result);

            if (result && Object.prototype.hasOwnProperty.call(result, labelKey)) {
                setContent(result[labelKey]);
            }

        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }


    React.useEffect(() => {
        loadData();
    }, [value]);

    return (
        <>
            {content && content}
        </>
    )
}