import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_9 extends BaseModel {
  public is_verified: boolean = false;
}
class Users_9CRUDState extends CrudTableState<Users_9> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_9';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      is_verified: false,
    };
  }
}
export default class Users_9CRUD extends CrudTable<any, Users_9CRUDState> {
  constructor(props: any) {
    super(props, Users_9CRUDState);
    this.state.setHeaders([
      new HeaderCell('is_verified', 'Is_verified', 'switch', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
