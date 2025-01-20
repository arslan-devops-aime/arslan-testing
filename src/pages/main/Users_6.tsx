import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_6 extends BaseModel {
  public address: string = '';
}
class Users_6CRUDState extends CrudTableState<Users_6> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_6';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      address: '',
    };
  }
}
export default class Users_6CRUD extends CrudTable<any, Users_6CRUDState> {
  constructor(props: any) {
    super(props, Users_6CRUDState);
    this.state.setHeaders([
      new HeaderCell('address', 'Address', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
