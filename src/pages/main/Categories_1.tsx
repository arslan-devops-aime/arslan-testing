import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Categories_1 extends BaseModel {
  public id: string = '';
}
class Categories_1CRUDState extends CrudTableState<Categories_1> {
  public axios: any | undefined = instance;
  public endpoint: string = 'categories_1';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class Categories_1CRUD extends CrudTable<
  any,
  Categories_1CRUDState
> {
  constructor(props: any) {
    super(props, Categories_1CRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
