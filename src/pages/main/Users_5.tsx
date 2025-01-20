import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_5 extends BaseModel {
  public phone: string = '';
}
class Users_5CRUDState extends CrudTableState<Users_5> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_5';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      phone: '',
    };
  }
}
export default class Users_5CRUD extends CrudTable<any, Users_5CRUDState> {
  constructor(props: any) {
    super(props, Users_5CRUDState);
    this.state.setHeaders([
      new HeaderCell('phone', 'Phone', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
