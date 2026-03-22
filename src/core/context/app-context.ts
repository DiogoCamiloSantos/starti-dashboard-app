import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LocalStorageEntry } from "./storage/local.storage";
import { StorageEntry } from "./storage/storage";
import { User } from "../domain/user/user";

const USER_CREDENTIAL_KEY = `user-credential-${environment.appName}`;

@Injectable()
export class AppContext {
    private userCredential: StorageEntry<User>;

    constructor() {
        this.userCredential = new LocalStorageEntry<User>(USER_CREDENTIAL_KEY);
    }

    public setUserCredential(credential: User) {
        this.userCredential.set(credential);
    }

    public getUserCredential(): User | null {
        return this.userCredential.get();
    }

    public removeUserCredential(): void {
        return this.userCredential.remove();
    }

    public getBackendUrl(): string {
        return environment.backendUrl;
    }

    public clearUserCredential() {
        this.userCredential.remove();
    }
}

