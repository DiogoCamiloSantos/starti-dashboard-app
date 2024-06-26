import Article from '@entities/article/article';
import readTableDataDecorator from 'src/ui/decorators/table-data/table-data.reader.decotator';
import ITableData, { ITableCell } from '../interfaces/table-data.interface';

export class UserProfileTableData implements ITableData {
  titles: string[];
  values: ITableCell[][];

  constructor(payments: Object[]) {
    const decorators = Object.keys(new Article())
      .map((field) => readTableDataDecorator(Article.prototype, field))
      .filter((dec) => dec.column);


      console.log('decorators', decorators);
      
    const values = payments.map((obj: any) =>
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
