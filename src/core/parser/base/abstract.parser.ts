import ITableData, { ITableCell } from "src/ui/components/table/interfaces/table-data.interface";
import { IParser } from "./parser.interface";

export abstract class AbstractParser<T> implements IParser<T> {
    abstract parse(payload: Payload, parse?: IParser<T>): T;
    abstract parseListAsTable(payload: PayloadList): ITableData;

    parseList(payload: PayloadList): Array<T> {
        if (!payload || !Array.isArray(payload)) {
            return [];
        }

        return payload.map(p => this.parse(p))
            .filter(p => p);
    }

}

export type PayloadList = Array<any>;
type Payload = any | object;
