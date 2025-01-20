import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_8 extends BaseModel {
  public age: number = 0;
}
class Users_8CRUDState extends CrudTableState<Users_8> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_8';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      age: 0,
    };
  }
}
export default class Users_8CRUD extends CrudTable<any, Users_8CRUDState> {
  constructor(props: any) {
    super(props, Users_8CRUDState);
    this.state.setHeaders([
      new HeaderCell('age', 'Age', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
