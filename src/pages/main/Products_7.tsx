import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_7 extends BaseModel {
  public in_stock: boolean = false;
}
class Products_7CRUDState extends CrudTableState<Products_7> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_7';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      in_stock: false,
    };
  }
}
export default class Products_7CRUD extends CrudTable<
  any,
  Products_7CRUDState
> {
  constructor(props: any) {
    super(props, Products_7CRUDState);
    this.state.setHeaders([
      new HeaderCell('in_stock', 'In_stock', 'switch', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
