import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_1 extends BaseModel {
  public id: string = '';
}
class Products_1CRUDState extends CrudTableState<Products_1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class Products_1CRUD extends CrudTable<
  any,
  Products_1CRUDState
> {
  constructor(props: any) {
    super(props, Products_1CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
