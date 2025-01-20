import { FieldType } from 'src/components/table/type';

export type ObjectType<T> = {
  type: FieldType;
  value: T;
  file?: File | File[];
};

export type linkType = {
  lable: string;
  url: string;
};
