import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users_31 extends BaseModel {
  public surname: string = '';
}
class Users_31CRUDState extends CrudTableState<Users_31> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users_31';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      surname: '',
    };
  }
}
export default class Users_31CRUD extends CrudTable<any, Users_31CRUDState> {
  constructor(props: any) {
    super(props, Users_31CRUDState);
    this.state.setHeaders([
      new HeaderCell('surname', 'Surname', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
