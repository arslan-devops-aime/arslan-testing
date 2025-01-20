import React, { Component } from 'react'
import { HeaderCell } from './models';
import { Box, Button, Flex, Grid, GridItem, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { DynamicInput } from './form';
import { refineLabel } from '.';
import ManualView from './manualView';

interface AddEditFormProps {
    headers: Array<HeaderCell>
    onClose: () => void,
    onChange: (name: string, value: any) => void;
    onSave: () => void;
    grids: number,
    userManual: boolean,
    selectedItem: any | undefined,
}
export default function AddEditForm({ headers, onClose, grids, userManual, onChange, selectedItem, onSave }: AddEditFormProps) {
    const noOfGrids: number = userManual ? 2 : grids;

    const fullWidthElements: Array<string> = [
        "dropzone",
        "rich-text-editor"
    ];

    const onChangeValue = (name: string, value: any) => {
        onChange(name, value)
    }

    return (
        <Modal isOpen={true} onClose={onClose} size={noOfGrids === 1 ? 'xl' : '5xl'} >
            <ModalOverlay bg={'#12125999'} backdropFilter={'blur(5px)'} />
            <ModalContent borderRadius={'20px'}
                bg={'white.100'}
                pl={15}
                pt={15}>
                {/* Header */}
                <ModalHeader>
                    Add/Edit Item
                </ModalHeader>
                <ModalCloseButton />


                {/* Form Body */}
                <ModalBody>
                    <Flex gap={2}>
                        <Box width={userManual ? "70%" : "100%"} pr={"20px"} height={"50vh"} overflow={"auto"}>
                            <Box as="form">
                                <Grid templateColumns={`repeat(${noOfGrids}, 1fr)`} gap={6}>
                                    {
                                        headers.map((item, index) => {
                                            let _val: any = "";
                                            if (selectedItem) {
                                                _val = selectedItem[item.key];
                                            }
                                            const { dataType, key, attributes } = item;
                                            return (
                                                <GridItem key={index} colSpan={fullWidthElements.includes(item.dataType) ? noOfGrids : 1} width={'100%'}>
                                                    <DynamicInput dataType={dataType} value={_val}
                                                        label={refineLabel(item.key)}
                                                        name={key} onChange={(value) => onChangeValue(item.key, value)} {...attributes} />
                                                </GridItem>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Box>
                        {
                            userManual &&
                            <Box width={"30%"} px={"10px"} height={"50vh"} overflow={"auto"}>
                                <ManualView />
                            </Box>
                        }
                    </Flex>
                </ModalBody>

                {/* Footer */}
                <ModalFooter gap={2}>
                    <Button
                        bg={'gray.100'}
                        color={'primary.100'}
                        borderRadius={'8px'}
                        fontWeight={'700'}
                        fontSize={'14px'}
                        onClick={onClose}>Cancel</Button>
                    <Button
                        bg={'green.100'}
                        color={'primary.100'}
                        borderRadius={'8px'}
                        fontWeight={'700'}
                        fontSize={'14px'} onClick={() => onSave()}>Save</Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
