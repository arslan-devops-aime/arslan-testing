import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_1 extends BaseModel {
  public user_id: string = '';
}
class Orders_1CRUDState extends CrudTableState<Orders_1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      user_id: '',
    };
  }
}
export default class Orders_1CRUD extends CrudTable<any, Orders_1CRUDState> {
  constructor(props: any) {
    super(props, Orders_1CRUDState);
    this.state.setHeaders([
      new HeaderCell('user_id', 'User_id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
