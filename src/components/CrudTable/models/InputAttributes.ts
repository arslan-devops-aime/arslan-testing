interface Option {
    label: string;
    value: string;
}

export default class InputAttributes {
    public inputPlaceholder: string = "";
    public helperText: string = "";
    public endPoint: string = "";
    public labelKey: string = "";
    public options: Array<Option> | undefined = undefined;

}