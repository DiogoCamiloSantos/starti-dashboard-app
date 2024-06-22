export default interface ITableData {
  titles: string[];
  values: ITableCell[][];
}

export interface ITableCell {
  value: string | number | boolean;
  subtitle?: string | number;
  type?: 'date' | 'currency' | 'text';
}
