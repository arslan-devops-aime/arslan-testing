import { RegisterOptions } from "react-hook-form";


export default class HeaderCell {
    public key: string = "";
    public title: string = "";
    public dataType: string = "text";
    public sortable: boolean = false;
    public visibility: boolean = false;
    public attributes: Record<string, any> | undefined = undefined;

    constructor(key: string, title: string, dataType: string = "text", sortable: boolean = false, visibility: boolean = false, attributes: Record<string, any> | undefined = undefined) {
        this.key = key;
        this.title = title;
        this.dataType = dataType;
        this.sortable = sortable;
        this.visibility = visibility;
        this.attributes = attributes;
    }

    toObject(): any {
        return {
            key: this.key,
            title: this.title,
            dataType: this.dataType,
            sortable: this.sortable,
            visibility: this.visibility,
        };
    }

    static fromObject(obj: any): HeaderCell {
        const { key, title, dataType, sortable, visibility } = obj;
        return new HeaderCell(key, title, dataType, sortable, visibility);
    }
}
