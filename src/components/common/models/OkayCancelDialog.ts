export default class OkayCancelDialog {
    public isOpen: boolean = false;
    public title: string = "";
    public description: string = "";
    public cancelButtonText: string = "Cancel";
    public okayButtonText: string = "Okay";
    public callback: any = undefined;
}