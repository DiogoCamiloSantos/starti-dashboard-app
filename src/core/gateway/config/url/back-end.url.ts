import { environment } from 'src/environments/environment';
import { Url } from './url';

export class BackendUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    override getUrl() : string {
        return environment.backendUrl + this.action;
    }
}