import React from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import { UseToastOptions } from '@chakra-ui/react';
import { OkayCancelDialog, ToastAttributes } from './models';
import Toast from "../Toast";


export abstract class ViewState {
    public okCancelDialog: OkayCancelDialog = new OkayCancelDialog();
    public toastData: ToastAttributes = new ToastAttributes(false, undefined, undefined);

    setOkayCancelDialog(title: string, description: string, callback: () => void) {
        this.okCancelDialog.title = title;
        this.okCancelDialog.description = description;
        this.okCancelDialog.callback = callback;
        this.okCancelDialog.isOpen = true;
    }

    setToastData(title: string, description: string, status?: UseToastOptions['status']) {
        this.toastData.show = true;
        this.toastData.title = title;
        this.toastData.description = description;
        this.toastData.status = status ?? 'success';
    }
}

export default abstract class View<VIEWPROPS, VIEWSTATE extends ViewState> extends React.Component<VIEWPROPS, VIEWSTATE> {
    protected statePrototype: any;

    leastDestructiveRef: React.RefObject<HTMLButtonElement> = React.createRef();

    constructor(props: VIEWPROPS, VIEWSTATECreator: { new(): VIEWSTATE; }) {
        super(props);
        this.state = new VIEWSTATECreator();
        this.statePrototype = VIEWSTATECreator.prototype;

        this.renderOkayCancelDialog = this.renderOkayCancelDialog.bind(this);
        this.showOkCancelDialog = this.showOkCancelDialog.bind(this);
        this.onDialogOkay = this.onDialogOkay.bind(this);
        this.onCloseOkayCancelDialog = this.onCloseOkayCancelDialog.bind(this);
        this.onCloseToast = this.onCloseToast.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    abstract renderViewBody(): React.ReactNode;

    onCloseOkayCancelDialog(): void {
        this.state.okCancelDialog.isOpen = false;
        this.setState(this.state);
    }
    render() {
        return (
            <>
                {this.renderViewBody()}
                {this.renderBottom()}
                {this.renderOkayCancelDialog()}
                {this.renderToast()}
            </>
        )
    }

    showOkCancelDialog(title: string, message: string, onOkButtonClicked: () => void) {
        Object.setPrototypeOf(this.state, this.statePrototype);
        this.state.setOkayCancelDialog(title, message, onOkButtonClicked);
        this.setState(this.state);
    }

    onDialogOkay() {
        this.onCloseOkayCancelDialog();
        this.state.okCancelDialog.callback && this.state.okCancelDialog.callback();
    }

    onCloseToast() {
        this.state.toastData.show = false;
        this.setState(this.state);
    }

    renderDialog(): React.ReactNode {
        return (<></>)
    }

    renderOkayCancelDialog(): React.ReactNode {
        return (
            <AlertDialog isOpen={this.state.okCancelDialog.isOpen}
                leastDestructiveRef={this.leastDestructiveRef}
                onClose={this.onCloseOkayCancelDialog}
                isCentered>
                <AlertDialogOverlay />
                <AlertDialogContent bgColor={'#fff'}>
                    <AlertDialogHeader>{this.state.okCancelDialog.title}</AlertDialogHeader>
                    <AlertDialogBody>
                        {this.state.okCancelDialog.description}
                    </AlertDialogBody>
                    <AlertDialogFooter gap={2}>
                        <Button onClick={this.onCloseOkayCancelDialog} ref={this.leastDestructiveRef}>
                            Cancel
                        </Button>
                        <Button onClick={this.onDialogOkay}>
                            Okay
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog >
        )
    }

    showToast(title: string, description: string, status?: UseToastOptions['status']) {
        Object.setPrototypeOf(this.state, this.statePrototype);
        this.state.setToastData(title, description, status);
        this.setState(this.state);
    }

    renderToast(): React.ReactNode {
        return (
            <>
                {this.state.toastData.show && <Toast toastData={this.state.toastData} onClose={this.onCloseToast} />}
            </>
        )
    }

    renderBottom(): React.ReactNode {
        return (null);
    }

}