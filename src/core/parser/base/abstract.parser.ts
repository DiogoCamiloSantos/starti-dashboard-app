import { IParser } from "./parser.interface";

export abstract class AbstractParser<T> implements IParser<T> {
    abstract parse(payload: Payload, parse?: IParser<T>): T;

    parseList(payload: PayloadList): Array<T> {
        if (!payload || !Array.isArray(payload)) {
            return [];
        }

        return payload.map(p => this.parse(p))
            .filter(p => p);
    }
}

type PayloadList = Array<any>;
type Payload = any | object;
