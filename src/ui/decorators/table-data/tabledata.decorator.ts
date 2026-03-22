import 'reflect-metadata';
import { TableDataDecoratorEnum } from './emuns/table-data-decorator.enum';
import { ITableDataProps } from './interfaces/table-data-props.interface';

export const TableDataColumn = (name: string, props?: ITableDataProps) => {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata(`${TableDataDecoratorEnum.Name}:${propertyKey}`, name, target, propertyKey);
    
    if (props) {
      Reflect.defineMetadata(`${TableDataDecoratorEnum.Props}:${propertyKey}`, props, target, propertyKey);
    }
  };
}
