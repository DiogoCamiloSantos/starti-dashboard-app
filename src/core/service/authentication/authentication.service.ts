import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from 'src/core/entities/user/user';
import { AppContext } from 'src/core/context/app-context';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private appContext: AppContext = inject(AppContext);

    constructor(
        private http: HttpClient
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(this.appContext.getUserCredential() || new User());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.backendUrl}/api/app/auth/login`, { username, password })
            .pipe(map(user => {
                console.log(user);
                
                this.appContext.setUserCredential(user);
                this.currentUserSubject.next(user);
                return user;
            }),
            catchError((error) => {
                console.log('error', error);
                return error
            })
       );
    }

    logout() {
        this.appContext.removeUserCredential();
        this.currentUserSubject.next(new User());
    }
}
