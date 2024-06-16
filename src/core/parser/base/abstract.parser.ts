import TableData, { TableCell } from "src/ui/components/table/models/table-data.interface";
import { IParser } from "./parser.interface";

export abstract class AbstractParser<T> implements IParser<T> {
    abstract parse(payload: Payload, parse?: IParser<T>): T;
    abstract parseListAsTable(payload: PayloadList): TableData<T>;

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
