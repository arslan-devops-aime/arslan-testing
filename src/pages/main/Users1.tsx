import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users1 extends BaseModel {
  public id: string = '';
  public unique: string = '';
}
class Users1CRUDState extends CrudTableState<Users1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
      unique: '',
    };
  }
}
export default class Users1CRUD extends CrudTable<any, Users1CRUDState> {
  constructor(props: any) {
    super(props, Users1CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
      new HeaderCell('unique', 'Unique', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
