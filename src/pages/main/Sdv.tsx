import React from 'react';
import {
  CrudTable,
  CrudTableState,
  HeaderCell,
  BaseModel,
} from 'src/components';
import instance from 'src/services/base/instance';

class Sdv extends BaseModel {
  public id: string = '';
  public name: string = '';
}
class SdvCRUDState extends CrudTableState<Sdv> {
  public axios: any | undefined = instance;
  public endpoint: string = 'sdv';
  public setSelectedItem(): void {
    this.selectedItem = {
      _id: '',
      id: '',
      name: '',
    };
  }
}
export default class SdvCRUD extends CrudTable<any, SdvCRUDState> {
  constructor(props: any) {
    super(props, SdvCRUDState);
    this.state.setHeaders([
      new HeaderCell('id', 'Id', 'text', false, true, {}),
      new HeaderCell('name', 'Name', 'text', false, true, {}),
    ]);
    this.state.setFormGrids(1);
  }
}
