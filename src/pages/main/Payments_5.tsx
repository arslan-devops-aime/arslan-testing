import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_5 extends BaseModel {
  public payment_method: string = '';
}
class Payments_5CRUDState extends CrudTableState<Payments_5> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_5';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      payment_method: '',
    };
  }
}
export default class Payments_5CRUD extends CrudTable<
  any,
  Payments_5CRUDState
> {
  constructor(props: any) {
    super(props, Payments_5CRUDState);
    this.state.setHeaders([
      new HeaderCell(
        'payment_method',
        'Payment_method',
        'text',
        false,
        true,
        {},
      ),
    ]);
    this.state.setFormGrids(1);
  }
}
