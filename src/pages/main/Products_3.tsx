import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_3 extends BaseModel {
  public sku: string = '';
}
class Products_3CRUDState extends CrudTableState<Products_3> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_3';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      sku: '',
    };
  }
}
export default class Products_3CRUD extends CrudTable<
  any,
  Products_3CRUDState
> {
  constructor(props: any) {
    super(props, Products_3CRUDState);
    this.state.setHeaders([
      new HeaderCell('sku', 'Sku', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
