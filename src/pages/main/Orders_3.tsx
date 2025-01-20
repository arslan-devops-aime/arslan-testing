import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_3 extends BaseModel {
  public name: string = '';
}
class Orders_3CRUDState extends CrudTableState<Orders_3> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_3';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      name: '',
    };
  }
}
export default class Orders_3CRUD extends CrudTable<any, Orders_3CRUDState> {
  constructor(props: any) {
    super(props, Orders_3CRUDState);
    this.state.setHeaders([
      new HeaderCell('name', 'Name', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
