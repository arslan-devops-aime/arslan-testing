import { UseToastOptions } from '@chakra-ui/react';

export default class ToastAttributes {
    show: boolean = false;
    title: string | undefined;
    description?: string | undefined;
    position?: string | undefined;
    status?: UseToastOptions['status'];

    constructor(show: boolean = false, title: string | undefined, description?: string | undefined, position?: string, status?: UseToastOptions['status']) {
        this.show = show;
        this.title = title;
        this.description = description;
        this.position = position;
        this.status = status;
    }
}
