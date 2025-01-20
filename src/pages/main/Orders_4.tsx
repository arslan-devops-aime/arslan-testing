import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_4 extends BaseModel {
  public qty: number = 0;
}
class Orders_4CRUDState extends CrudTableState<Orders_4> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_4';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      qty: 0,
    };
  }
}
export default class Orders_4CRUD extends CrudTable<any, Orders_4CRUDState> {
  constructor(props: any) {
    super(props, Orders_4CRUDState);
    this.state.setHeaders([
      new HeaderCell('qty', 'Qty', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
