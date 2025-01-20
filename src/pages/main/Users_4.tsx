import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_4 extends BaseModel {
  public email: string = '';
}
class Users_4CRUDState extends CrudTableState<Users_4> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_4';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      email: '',
    };
  }
}
export default class Users_4CRUD extends CrudTable<any, Users_4CRUDState> {
  constructor(props: any) {
    super(props, Users_4CRUDState);
    this.state.setHeaders([
      new HeaderCell('email', 'Email', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
