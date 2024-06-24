import { Payment } from 'src/core/entities/payment/payment';
import ITableData, { ITableCell } from '../interfaces/table-data.interface';
import readMetadata from 'src/ui/decorators/metadata.reader.decotator';
import readTableDataDecorator from 'src/ui/decorators/table-data/table-data.reader.decotator';

export class UserProfileTableData implements ITableData {
  titles: string[];
  values: ITableCell[][];

  constructor(payments: Object[]) {
    const decorators = Object.keys(new Payment())
      .map((field) => readTableDataDecorator(Payment.prototype, field))
      .filter((dec) => dec.column);


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
