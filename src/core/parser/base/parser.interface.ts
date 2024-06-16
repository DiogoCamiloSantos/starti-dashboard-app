export interface IParser<T> {
    parse(payload: any): T;
    parseList(payload: any): Array<T>;
}

