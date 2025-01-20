import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_3 extends BaseModel {
  public amount: number = 0;
}
class Payments_3CRUDState extends CrudTableState<Payments_3> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_3';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      amount: 0,
    };
  }
}
export default class Payments_3CRUD extends CrudTable<
  any,
  Payments_3CRUDState
> {
  constructor(props: any) {
    super(props, Payments_3CRUDState);
    this.state.setHeaders([
      new HeaderCell('amount', 'Amount', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
