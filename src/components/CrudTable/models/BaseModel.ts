export default abstract class BaseModel {
    public _id: string;

    constructor(id: string = "") {
        this._id = id;
    }
}
