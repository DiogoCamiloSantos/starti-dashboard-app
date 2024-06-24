import 'reflect-metadata';
import { TableDataDecoratorEnum } from './emuns/table-data-decorator.enum';
import { ITableDataProps } from './interfaces/table-data-props.interface';

type TableDataDecoratorState = {
  column: string,
  propertyKey: string,
  props?: ITableDataProps,
} 

function readTableDataDecorator(target: any, propertyKey: string)
  : TableDataDecoratorState {
    
  const column = <string> Reflect.getMetadata(`${TableDataDecoratorEnum.Name}:${propertyKey}`, target, propertyKey);
  const props = <ITableDataProps> Reflect.getMetadata(`${TableDataDecoratorEnum.Props}:${propertyKey}`, target, propertyKey);

  return {
    column,
    propertyKey,
    props
  };
}

export default readTableDataDecorator;
