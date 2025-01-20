import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_2_2 extends BaseModel {
  public id: string = '';
  public unique: string = '';
}
class Users_2_2CRUDState extends CrudTableState<Users_2_2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_2_2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
      unique: '',
    };
  }
}
export default class Users_2_2CRUD extends CrudTable<any, Users_2_2CRUDState> {
  constructor(props: any) {
    super(props, Users_2_2CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
      new HeaderCell('unique', 'Unique', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
