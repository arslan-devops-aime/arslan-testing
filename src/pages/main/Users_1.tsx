import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_1 extends BaseModel {
  public id: string = '';
}
class Users_1CRUDState extends CrudTableState<Users_1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class Users_1CRUD extends CrudTable<any, Users_1CRUDState> {
  constructor(props: any) {
    super(props, Users_1CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
