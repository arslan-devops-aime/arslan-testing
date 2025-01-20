import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Products_6 extends BaseModel {
  public date_added: string = '';
}
class Products_6CRUDState extends CrudTableState<Products_6> {
  public axios: any | undefined = instance;
  public endpoint: string = 'products_6';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      date_added: '',
    };
  }
}
export default class Products_6CRUD extends CrudTable<
  any,
  Products_6CRUDState
> {
  constructor(props: any) {
    super(props, Products_6CRUDState);
    this.state.setHeaders([
      new HeaderCell('date_added', 'Date_added', 'date', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
