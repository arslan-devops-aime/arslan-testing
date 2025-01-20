import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Categories_3 extends BaseModel {
  public description: string = '';
  public description_copy: string = '';
  public description_copy_copy: string = '';
  public description_copy_copy_copy: string = '';
}
class Categories_3CRUDState extends CrudTableState<Categories_3> {
  public axios: any | undefined = instance;
  public endpoint: string = 'categories_3';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      description: '',
      description_copy: '',
      description_copy_copy: '',
      description_copy_copy_copy: '',
    };
  }
}
export default class Categories_3CRUD extends CrudTable<
  any,
  Categories_3CRUDState
> {
  constructor(props: any) {
    super(props, Categories_3CRUDState);
    this.state.setHeaders([
      new HeaderCell('description', 'Description', 'text', false, true, {}),
      new HeaderCell(
        'description_copy',
        'Description_copy',
        'text',
        false,
        true,
        {},
      ),
      new HeaderCell(
        'description_copy_copy',
        'Description_copy_copy',
        'text',
        false,
        true,
        {},
      ),
      new HeaderCell(
        'description_copy_copy_copy',
        'Description_copy_copy_copy',
        'text',
        false,
        true,
        {},
      ),
    ]);
    this.state.setFormGrids(1);
  }
}
