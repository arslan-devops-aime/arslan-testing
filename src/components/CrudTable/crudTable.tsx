import React from 'react';
import View, { ViewState } from '../common/View'
import { Box, Button, ButtonGroup, IconButton, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { BaseModel, HeaderCell } from './models';
import AddEditForm from './AddEditForm';
import { Axios } from 'axios';
import { DynamicContent } from './form';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { isFileObject, isFileObjectArray, isObject } from './utils';


export abstract class CrudTableState<ITEM extends BaseModel> extends ViewState {

    public title: string = "Lis View";


    public axios: Axios | undefined = undefined;

    public endpoint: string = "";
    public getAllEndoint: string = "";
    public addEndpoint: string = "";
    public updateEndpoint: string = "";
    public deleteEndpoint: string = "";
    public singleFileUploadEndpoint: string = "upload";
    public multipleFileUploadEndpoint: string = "upload/multiple";

    public items: Array<ITEM> | undefined = undefined;
    public selectedItem: ITEM | undefined = undefined;

    public hasPagination: boolean = false;
    public searchText: string | undefined = undefined;

    public isAddingItem: boolean = false;
    public isAddingButtonText: string = "Add Item";

    public headers: HeaderCell[] = [];

    public isEditing: boolean = false;
    public isEditingButtonText: string = "Edit";

    public isLoading: boolean = true;

    public formGrids: number = 3;

    public showUserGuides: boolean = false

    public setItems(items: Array<ITEM>) {
        this.items = items;
    }

    public setHeaders(headers: HeaderCell[]) {
        this.headers = headers;
    }

    public setFormGrids(grids: number) {
        this.formGrids = grids;
    }

    public setShowUserManual(show: boolean) {
        this.showUserGuides = show;
    }

    public setSelectedItem(item?: ITEM | undefined): void {
        if (item === undefined) {
            // Create a new instance of ITEM with the default constructor
            // this.state.selectedItem = new (this.state.selectedItem.constructor as new () => ITEM)();
        } else {
            // Create a new instance of ITEM and assign its values based on the provided item
            // this.state.selectedItem = new (this.state.selectedItem.constructor as new () => ITEM)();
            // Object.assign(this.state.selectedItem, item);
        }
    }


}

export abstract class CrudTable<ITEM extends BaseModel, CRUDTABLESTATE extends CrudTableState<ITEM>> extends View<any, CRUDTABLESTATE> {
    constructor(props: any, LISTVCSTATECreator: { new(): CRUDTABLESTATE; }) {
        super(props, LISTVCSTATECreator);

        this.renderAddItemModal = this.renderAddItemModal.bind(this);

        this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
        this.onStopAddingEditing = this.onStopAddingEditing.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSave = this.onSave.bind(this);

        this.onDeleteItem = this.onDeleteItem.bind(this);

        this.renderTableRow = this.renderTableRow.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
    }

    componentDidMount(): void {
        this.fecthData();
    }

    async fecthData(): Promise<void> {
        if (this.state.axios !== undefined) {
            try {
                let response: any = await this.state.axios.get(`${this.state.endpoint}`);
                response = response.data;
                this.setState((prevState) => ({ ...prevState, items: response as Array<ITEM> }));

            } catch (error) {
                console.log("⭕ Error:", error);
            }
        }
    }

    onChangeValue(name: string, value: any): void {
        Object.setPrototypeOf(this.state, this.statePrototype);
        console.log("㊙️ Name", name, "㊙️ Value", value)
        this.setState(prevState => {
            // console.log(prevState);
            if (Object.prototype.hasOwnProperty.call(prevState.selectedItem, name)) {
                // Create a new object with the updated value
                const updatedSelectedItem = {
                    ...prevState.selectedItem,
                    [name]: value,
                };

                // Return the updated state
                return {
                    ...prevState,
                    selectedItem: updatedSelectedItem,
                };
            } else {
                // The object does not have the 'name' property or 'selectedItem' is null
                // Handle the case where 'name' is not a property of 'selectedItem'
                return prevState; // No changes to state
            }
        }, () => {
            console.log("㊙️ VALUES:", this.state.selectedItem);
        });
    }

    async uploadFile(file: File | Array<File>): Promise<any> {
        const formData = new FormData();
        try {
            let response: any;

            if (Array.isArray(file)) {
                for (let i = 0; i < file.length; i++) {
                    formData.append('files', file[i]);
                }
                response = await this.state.axios!.post(this.state.multipleFileUploadEndpoint, formData);
                return response;
            } else {
                formData.append('file', file);
                response = await this.state.axios!.post(this.state.singleFileUploadEndpoint, formData);
                return response;
            }
        } catch (error) {
            console.error('🔴 An error occurred during file upload:', error);
            throw error;
        }
    }


    async preSave(): Promise<void> {
        Object.setPrototypeOf(this.state, this.statePrototype);
        console.log("㊙️ PRE SAVE:", this.state.selectedItem);
        const selectedItem = this.state.selectedItem;

        if (selectedItem) {
            Object.entries(selectedItem).forEach(async ([key, value], index) => {
                if (isObject(value)) {
                    if (isFileObject(value.value) || isFileObjectArray(value.value)) {
                        try {
                            const response: any = await this.uploadFile(value.value);
                            console.log("🟢 File Object!", response);
                            if (isFileObjectArray(value.value)) {
                                this.onChangeValue(key, {
                                    type: 'image',
                                    value: response.data.fileURL
                                });
                            } else {
                                const images = response.data.map((_item: any) => _item.fileURL);
                                this.onChangeValue(key, {
                                    type: 'dropzone',
                                    value: images
                                });
                            }
                        } catch (error) {
                            console.error('🔴 An error occurred during file upload:', error);
                        }
                    }
                }

                console.log(key, value, index);
            });
        } else {
            console.warn("Selected item is undefined.");
        }
    }

    async onSave(): Promise<void> {
        if (this.state.selectedItem !== undefined) {
            try {
                await this.preSave();
                const body: any = this.state.selectedItem;
                if (this.state.selectedItem._id?.trim().length > 0) {
                    await this.state.axios!.put(`${this.state.endpoint}`, body, {
                        params: {
                            _id: this.state.selectedItem._id,
                        }
                    })
                } else {
                    delete body._id;
                    await this.state.axios!.post(`${this.state.endpoint}`, body)
                }
                this.fecthData();
                this.onStopAddingEditing();
            } catch (error: any) {
                console.log("🔴 Error:", error);
                this.showToast('Error', error?.message, 'error');
            }
        }
    }

    onAddButtonClicked = () => {
        Object.setPrototypeOf(this.state, this.statePrototype)
        if (this.state.selectedItem === undefined) {
            this.state.setSelectedItem();
        }
        this.setState({ ...this.state, isAddingItem: true, selectedItem: this.state.selectedItem });
    }

    onStopAddingEditing = () => {
        this.setState({ ...this.state, isAddingItem: false, isEditing: false, selectedItem: undefined });
    }

    renderViewBody(): React.ReactNode {
        return (
            <Box>
                {this.renderHeader()}
                {this.state.items && this.renderTable()}
            </Box>
        )
    }

    renderHeader(): React.ReactNode {
        return (
            <Box display="flex" justifyContent="space-between">
                {this.renderSearchBox()}
                {this.renderActions()}
            </Box>
        )
    }

    renderSearchBox(): React.ReactNode {
        return (
            <Box>
                <Input placeholder='Type to search...' />
            </Box>
        )
    }

    renderActions(): React.ReactNode {
        return (
            <Box>
                <Button colorScheme='blue' onClick={this.onAddButtonClicked}>Add Item</Button>
            </Box>
        )
    }

    renderTable(): React.ReactNode {
        return (
            <Box bgColor={'white'} marginY={'20px'} borderRadius={'10px'} overflow={'auto'}>
                <Table>
                    {this.renderTableHeader()}
                    {this.renderTableBody()}
                </Table>
            </Box>
        )
    }

    renderTableHeader(): React.ReactNode {
        if (this.state.headers.length <= 0) {
            return null;
        }
        return (
            <Thead>
                <Tr>
                    {
                        this.state.headers.map((item, index) => {
                            if (item.visibility !== undefined && item.visibility) {
                                return (
                                    <Th key={index}>{item.key}</Th>
                                )
                            }
                            return null;
                        })
                    }
                    <Th textAlign={'center'}>Actions</Th>
                </Tr>
            </Thead>
        )
    }

    renderTableBody(): React.ReactNode {
        return (
            <Tbody>
                {
                    this.state.items && this.state.items.length > 0 ?
                        this.state.items.map((item: ITEM, index: number) => {
                            return this.renderTableRow(item, index);
                        })
                        :
                        this.renderNoRow()
                }
            </Tbody>
        )

    }

    renderNoRow(): React.ReactNode {
        return (
            <Tr>
                <Td colSpan={this.state.headers.length} textAlign={'center'}>No Item found!</Td>
            </Tr>
        )
    }

    onDeleteItem(item: ITEM): void {
        Object.setPrototypeOf(this.state, this.statePrototype);
        this.showOkCancelDialog('Delete Book', 'Really want to delete?', async () => {
            try {
                await this.state.axios?.delete(`${this.state.endpoint}`, {
                    params: {
                        _id: item._id
                    }
                });
                this.fecthData();
                this.showToast('Deleted', 'Record successfully deleted!'), 'success';
            } catch (error) {
                this.showToast('Error', 'Error while deleting!'), 'error';
            }
        });
    }

    onEditItem(item: ITEM): void {
        Object.setPrototypeOf(this.state, this.statePrototype);
        this.setState({ ...this.state, isEditing: true, selectedItem: item });
    }

    renderTableRow(item: ITEM, index: number): React.ReactNode {
        console.log(item);
        return (
            <Tr key={index}>
                {this.state.headers.map((_item, columnIndex) => {
                    if (_item.visibility !== undefined && _item.visibility) {
                        // Use type assertion to tell TypeScript that item[_item.key] is a valid property
                        const propertyValue = item[_item.key as keyof ITEM];
                        return (
                            <Td key={columnIndex}>
                                <DynamicContent content={propertyValue} dataType={_item.dataType} attributes={_item.attributes} />
                            </Td>
                        );
                    }
                    return null;
                })}
                <Td textAlign={'center'}>
                    <ButtonGroup>
                        <IconButton aria-label='delete' onClick={() => this.onDeleteItem(item)} icon={<FaTrash />} />
                        <IconButton aria-label='edit' onClick={() => this.onEditItem(item)} icon={<FaPencilAlt />} />
                    </ButtonGroup>
                </Td>
            </Tr>
        );
    }


    renderAddItemModal(): React.ReactNode {
        return <AddEditForm selectedItem={this.state.selectedItem} headers={this.state.headers} onClose={this.onStopAddingEditing} onChange={this.onChangeValue} onSave={this.onSave} userManual={this.state.showUserGuides} grids={this.state.formGrids} />
    }

    renderEditItemModal(): React.ReactNode {
        return <AddEditForm selectedItem={this.state.selectedItem} headers={this.state.headers} onClose={this.onStopAddingEditing} onChange={this.onChangeValue} onSave={this.onSave} userManual={this.state.showUserGuides} grids={this.state.formGrids} />
    }

    renderBottom(): React.ReactNode {
        if (this.state.isAddingItem) {
            return this.renderAddItemModal();
        }
        else if (this.state.isEditing) {
            return this.renderEditItemModal();
        }
        return null;
    }
}
