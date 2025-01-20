import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_7 extends BaseModel {
  public city: string = '';
}
class Users_7CRUDState extends CrudTableState<Users_7> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_7';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      city: '',
    };
  }
}
export default class Users_7CRUD extends CrudTable<any, Users_7CRUDState> {
  constructor(props: any) {
    super(props, Users_7CRUDState);
    this.state.setHeaders([
      new HeaderCell('city', 'City', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
