import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_7 extends BaseModel {
  public status: string = '';
}
class Orders_7CRUDState extends CrudTableState<Orders_7> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_7';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      status: '',
    };
  }
}
export default class Orders_7CRUD extends CrudTable<any, Orders_7CRUDState> {
  constructor(props: any) {
    super(props, Orders_7CRUDState);
    this.state.setHeaders([
      new HeaderCell('status', 'Status', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
