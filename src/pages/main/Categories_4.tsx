import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Categories_4 extends BaseModel {
  public created_at: string = '';
}
class Categories_4CRUDState extends CrudTableState<Categories_4> {
  public axios: any | undefined = instance;
  public endpoint: string = 'categories_4';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      created_at: '',
    };
  }
}
export default class Categories_4CRUD extends CrudTable<
  any,
  Categories_4CRUDState
> {
  constructor(props: any) {
    super(props, Categories_4CRUDState);
    this.state.setHeaders([
      new HeaderCell('created_at', 'Created_at', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
