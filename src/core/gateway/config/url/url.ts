interface IUrl {
    getUrl() : string;
}

export class Url implements IUrl {
    constructor (action: string) {
    }

    getUrl() : string {
        return "";
    }
}
