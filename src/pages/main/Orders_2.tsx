import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Orders_2 extends BaseModel {
  public product_id: string = '';
}
class Orders_2CRUDState extends CrudTableState<Orders_2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'orders_2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      product_id: '',
    };
  }
}
export default class Orders_2CRUD extends CrudTable<any, Orders_2CRUDState> {
  constructor(props: any) {
    super(props, Orders_2CRUDState);
    this.state.setHeaders([
      new HeaderCell('product_id', 'Product_id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
