import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_12 extends BaseModel {
  public id: string = '';
}
class Users_12CRUDState extends CrudTableState<Users_12> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_12';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class Users_12CRUD extends CrudTable<any, Users_12CRUDState> {
  constructor(props: any) {
    super(props, Users_12CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
