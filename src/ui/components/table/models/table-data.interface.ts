export default interface TableData<T> {
  titles: string[];
  values: TableCell[][];
}

export interface TableCell {
  value: string | number | boolean;
  subtitle?: string | number;
  type?: 'date' | 'currency' | 'text';
}
