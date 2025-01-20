import { CSSProperties } from 'react';
import { SelectOptionsT } from '../CSelect';
import { RegisterOptions } from 'react-hook-form';

export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'select'
  | 'fk-select'
  | 'date'
  | 'switch'
  | 'image'
  | 'dropzone'
  | 'currency'
  | 'link-internal'
  | 'link-external'
  | 'action-icon';
export type ColumnT = {
  accessor: string;
  title: string;
  type: FieldType;
  disableSort?: boolean;
  noValueText?: string;
  placeholder?: string;
  styles?: CSSProperties;
  body?: (row: any) => JSX.Element | string;
  selectOptions?: SelectOptionsT;
  fkDropdown?: {
    endpoint: string;
    labelKey: string;
  };
  fieldValidation?: RegisterOptions;
};

export type sortT = 'ASCE' | 'DESC' | undefined;
export type sortConfigT = { accessor: string; sort: sortT };
export interface doSortingParameters {
  (data: any[], propertyName: string, type: sortT): any[];
}

export interface CustomTableProps {
  name: string;
  columns: Array<ColumnT>;
  rows: Array<any>;
  isLoading: boolean;
  noDataText?: string;
  noValueText?: string;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

export interface CustomTableHeadProps {
  hasData: boolean;
  columns: Array<ColumnT>;
  sortConfig: Array<sortConfigT>;
  toggleSortOrder: (accessor: string, index: number) => void;
}

export interface CustomTableBodyProps {
  columns: Array<ColumnT>;
  rows: Array<any>;
  noValueText: string;
  noDataText: string;
}
