import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_5 extends BaseModel {
  public status: string = '';
}
class Products_5CRUDState extends CrudTableState<Products_5> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_5';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      status: '',
    };
  }
}
export default class Products_5CRUD extends CrudTable<
  any,
  Products_5CRUDState
> {
  constructor(props: any) {
    super(props, Products_5CRUDState);
    this.state.setHeaders([
      new HeaderCell('status', 'Status', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
