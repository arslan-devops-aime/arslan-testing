import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_8 extends BaseModel {
  public price: number = 0;
}
class Products_8CRUDState extends CrudTableState<Products_8> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_8';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      price: 0,
    };
  }
}
export default class Products_8CRUD extends CrudTable<
  any,
  Products_8CRUDState
> {
  constructor(props: any) {
    super(props, Products_8CRUDState);
    this.state.setHeaders([
      new HeaderCell('price', 'Price', 'number', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
