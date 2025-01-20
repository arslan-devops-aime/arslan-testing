import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_22 extends BaseModel {
  public firstname: string = '';
}
class Users_22CRUDState extends CrudTableState<Users_22> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_22';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      firstname: '',
    };
  }
}
export default class Users_22CRUD extends CrudTable<any, Users_22CRUDState> {
  constructor(props: any) {
    super(props, Users_22CRUDState);
    this.state.setHeaders([
      new HeaderCell('firstname', 'Firstname', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
