import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_4 extends BaseModel {
  public qty: number = 0;
}
class Products_4CRUDState extends CrudTableState<Products_4> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_4';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      qty: 0,
    };
  }
}
export default class Products_4CRUD extends CrudTable<
  any,
  Products_4CRUDState
> {
  constructor(props: any) {
    super(props, Products_4CRUDState);
    this.state.setHeaders([
      new HeaderCell('qty', 'Qty', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
