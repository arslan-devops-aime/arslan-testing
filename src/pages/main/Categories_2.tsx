import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Categories_2 extends BaseModel {
  public name: string = '';
}
class Categories_2CRUDState extends CrudTableState<Categories_2> {
  public axios: any | undefined = instance;
  public endpoint: string = 'categories_2';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      name: '',
    };
  }
}
export default class Categories_2CRUD extends CrudTable<
  any,
  Categories_2CRUDState
> {
  constructor(props: any) {
    super(props, Categories_2CRUDState);
    this.state.setHeaders([
      new HeaderCell('name', 'Name', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
