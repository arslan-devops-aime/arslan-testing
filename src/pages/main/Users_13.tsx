import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_13 extends BaseModel {
  public unique: string = '';
}
class Users_13CRUDState extends CrudTableState<Users_13> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_13';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      unique: '',
    };
  }
}
export default class Users_13CRUD extends CrudTable<any, Users_13CRUDState> {
  constructor(props: any) {
    super(props, Users_13CRUDState);
    this.state.setHeaders([
      new HeaderCell('unique', 'Unique', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
