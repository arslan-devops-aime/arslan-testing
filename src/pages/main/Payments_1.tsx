import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Payments_1 extends BaseModel {
  public id: string = '';
}
class Payments_1CRUDState extends CrudTableState<Payments_1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'payments_1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class Payments_1CRUD extends CrudTable<
  any,
  Payments_1CRUDState
> {
  constructor(props: any) {
    super(props, Payments_1CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
