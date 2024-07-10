import readTableDataDecorator from 'src/ui/decorators/table-data/table-data.reader.decotator';
import ITableData, { ITableCell } from '../interfaces/table-data.interface';


export class TableData implements ITableData {
  titles: string[];
  values: ITableCell[][];

  constructor(items: Object[], fromClass: any) {
    const decorators = Object.keys(items[0])
      .map((field) => readTableDataDecorator(fromClass.prototype, field))
      .filter((dec) => dec.column);


    const values = items.map((obj: any) =>
      decorators.map((d) => ({
        value: obj[d.propertyKey],
        ...(d.props?.subtitle && { subtitle: obj[d.props.subtitle] }),
        ...(d.props?.type && { type: d.props.type }),
      }))
    );

    return {
      titles: decorators.map((d) => d.column),
      values,
    };
  }
}
