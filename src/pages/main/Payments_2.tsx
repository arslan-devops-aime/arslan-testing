import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_2 extends BaseModel {
  public order_id: string = '';
}
class Payments_2CRUDState extends CrudTableState<Payments_2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      order_id: '',
    };
  }
}
export default class Payments_2CRUD extends CrudTable<
  any,
  Payments_2CRUDState
> {
  constructor(props: any) {
    super(props, Payments_2CRUDState);
    this.state.setHeaders([
      new HeaderCell('order_id', 'Order_id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
