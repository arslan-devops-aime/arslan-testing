import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_6 extends BaseModel {
  public payment_date: string = '';
}
class Payments_6CRUDState extends CrudTableState<Payments_6> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_6';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      payment_date: '',
    };
  }
}
export default class Payments_6CRUD extends CrudTable<
  any,
  Payments_6CRUDState
> {
  constructor(props: any) {
    super(props, Payments_6CRUDState);
    this.state.setHeaders([
      new HeaderCell('payment_date', 'Payment_date', 'date', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
