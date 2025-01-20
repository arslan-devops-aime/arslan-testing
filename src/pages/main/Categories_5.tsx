import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Categories_5 extends BaseModel {
  public updated_at: string = '';
}
class Categories_5CRUDState extends CrudTableState<Categories_5> {
  public axios: any | undefined = instance;
  public endpoint: string = 'categories_5';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      updated_at: '',
    };
  }
}
export default class Categories_5CRUD extends CrudTable<
  any,
  Categories_5CRUDState
> {
  constructor(props: any) {
    super(props, Categories_5CRUDState);
    this.state.setHeaders([
      new HeaderCell('updated_at', 'Updated_at', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
