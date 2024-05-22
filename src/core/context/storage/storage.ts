import { AbstractParser } from "src/core/parser/base/abstract.parser";

export abstract class StorageEntry<T> {
    protected constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null,
        private storage: Storage
    ) {
    }

    protected parse(entity:  any): T | null {
        return this.parser.parse(entity);
    }

    get(): T | null {
        const entity = this.storage?.getItem(this.key);
        if (entity) {
            const entityJson = JSON.parse(entity);
            if (this.parser) {
                return Array.isArray(entityJson)
                    ? this.parser.parseList(entityJson)
                    : this.parser.parse(entityJson);
            }
            return entityJson;
        }

        return null;
    }

    set(item: T) {
        this.storage?.setItem(this.key, JSON.stringify(item));
    }

    remove() {
        this.storage?.removeItem(this.key);
    }
}
