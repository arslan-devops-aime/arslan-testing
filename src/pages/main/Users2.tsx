import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Users2 extends BaseModel {
  public id: string = '';
  public firstname: string = '';
  public surname: string = '';
  public email: string = '';
  public phone: string = '';
  public address: string = '';
  public city: string = '';
  public age: number = 0;
  public is_verified: boolean = false;
  public added_on: string = '';
  public updated_at: string = '';
}
class Users2CRUDState extends CrudTableState<Users2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'users2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
      firstname: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      age: 0,
      is_verified: false,
      added_on: '',
      updated_at: '',
    };
  }
}
export default class Users2CRUD extends CrudTable<any, Users2CRUDState> {
  constructor(props: any) {
    super(props, Users2CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
      new HeaderCell('firstname', 'Firstname', 'text', false, true, {}),
      new HeaderCell('surname', 'Surname', 'text', false, true, {}),
      new HeaderCell('email', 'Email', 'text', false, true, {}),
      new HeaderCell('phone', 'Phone', 'text', false, true, {}),
      new HeaderCell('address', 'Address', 'text', false, true, {}),
      new HeaderCell('city', 'City', 'text', false, true, {}),
      new HeaderCell('age', 'Age', 'number', false, true, {}),
      new HeaderCell('is_verified', 'Is_verified', 'switch', false, true, {}),
      new HeaderCell('added_on', 'Added_on', 'date', false, true, {}),
      new HeaderCell('updated_at', 'Updated_at', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
