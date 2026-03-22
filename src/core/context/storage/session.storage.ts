import { AbstractParser } from "src/core/parser/base/abstract.parser";
import { StorageEntry } from "./storage";

export class SessionStorageEntry<T> extends StorageEntry<T> {
    constructor(
         key: string,
         parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, sessionStorage);
    }
}
