import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_11 extends BaseModel {
  public updated_at: string = '';
}
class Users_11CRUDState extends CrudTableState<Users_11> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_11';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      updated_at: '',
    };
  }
}
export default class Users_11CRUD extends CrudTable<any, Users_11CRUDState> {
  constructor(props: any) {
    super(props, Users_11CRUDState);
    this.state.setHeaders([
      new HeaderCell('updated_at', 'Updated_at', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
