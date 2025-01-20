import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_21 extends BaseModel {
  public id: string = '';
  public unique: string = '';
}
class Users_21CRUDState extends CrudTableState<Users_21> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_21';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
      unique: '',
    };
  }
}
export default class Users_21CRUD extends CrudTable<any, Users_21CRUDState> {
  constructor(props: any) {
    super(props, Users_21CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
      new HeaderCell('unique', 'Unique', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
