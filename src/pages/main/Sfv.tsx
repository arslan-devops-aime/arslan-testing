import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Sfv extends BaseModel {
  public id: string = '';
}
class SfvCRUDState extends CrudTableState<Sfv> {
  public axios: any | undefined = instance;
  public endpoint: string = 'sfv';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
    };
  }
}
export default class SfvCRUD extends CrudTable<any, SfvCRUDState> {
  constructor(props: any) {
    super(props, SfvCRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
