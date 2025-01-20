import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_10 extends BaseModel {
  public added_on: string = '';
}
class Users_10CRUDState extends CrudTableState<Users_10> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_10';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      added_on: '',
    };
  }
}
export default class Users_10CRUD extends CrudTable<any, Users_10CRUDState> {
  constructor(props: any) {
    super(props, Users_10CRUDState);
    this.state.setHeaders([
      new HeaderCell('added_on', 'Added_on', 'date', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
