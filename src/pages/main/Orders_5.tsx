import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_5 extends BaseModel {
  public amount: number = 0;
}
class Orders_5CRUDState extends CrudTableState<Orders_5> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_5';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      amount: 0,
    };
  }
}
export default class Orders_5CRUD extends CrudTable<any, Orders_5CRUDState> {
  constructor(props: any) {
    super(props, Orders_5CRUDState);
    this.state.setHeaders([
      new HeaderCell('amount', 'Amount', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
