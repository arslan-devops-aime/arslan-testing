import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_4 extends BaseModel {
  public payment_status: string = '';
}
class Payments_4CRUDState extends CrudTableState<Payments_4> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_4';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      payment_status: '',
    };
  }
}
export default class Payments_4CRUD extends CrudTable<
  any,
  Payments_4CRUDState
> {
  constructor(props: any) {
    super(props, Payments_4CRUDState);
    this.state.setHeaders([
      new HeaderCell(
        'payment_status',
        'Payment_status',
        'text',
        false,
        true,
        {},
      ),
    ]);
    this.state.setFormGrids(1);
  }
}
