import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_2 extends BaseModel {
  public name: string = '';
}
class Products_2CRUDState extends CrudTableState<Products_2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      name: '',
    };
  }
}
export default class Products_2CRUD extends CrudTable<
  any,
  Products_2CRUDState
> {
  constructor(props: any) {
    super(props, Products_2CRUDState);
    this.state.setHeaders([
      new HeaderCell('name', 'Name', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
