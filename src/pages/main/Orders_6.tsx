import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_6 extends BaseModel {
  public date: string = '';
}
class Orders_6CRUDState extends CrudTableState<Orders_6> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_6';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      date: '',
    };
  }
}
export default class Orders_6CRUD extends CrudTable<any, Orders_6CRUDState> {
  constructor(props: any) {
    super(props, Orders_6CRUDState);
    this.state.setHeaders([
      new HeaderCell('date', 'Date', 'date', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
