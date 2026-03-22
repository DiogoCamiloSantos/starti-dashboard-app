import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

const mockUsers = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Mock' },
    { id: 2, username: 'diogo', password: '123456', firstName: 'Diogo', lastName: 'Camilo' }
];

const mockUserProfiles = [
    { id: '1', firstName: 'Diogo', lastName: 'Camilo', email: '@diogocamilo', title: 'Programador', createdAt: '2022-09-29T00:00:00.000Z' },
    { id: '2', firstName: 'Luciana', lastName: 'Oliveira', email: '@lucy', title: 'Programadora', createdAt: '2022-09-29T00:00:00.000Z' },
    { id: '3', firstName: 'Carlos', lastName: 'Silva', email: '@carlossilva', title: 'Designer', createdAt: '2022-10-01T00:00:00.000Z' },
    { id: '4', firstName: 'Ana', lastName: 'Souza', email: '@anasouza', title: 'Product Manager', createdAt: '2022-10-05T00:00:00.000Z' },
    { id: '5', firstName: 'Rafael', lastName: 'Costa', email: '@rafaelcosta', title: 'DevOps', createdAt: '2022-10-10T00:00:00.000Z' },
    { id: '6', firstName: 'Julia', lastName: 'Martins', email: '@juliamartins', title: 'QA Engineer', createdAt: '2022-10-15T00:00:00.000Z' }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.includes('api/app/auth/login') && method === 'POST':
                    return authenticate();
                case url.includes('UserProfile') && method === 'GET':
                    return ok(mockUserProfiles);
                case url.includes('/users') && method === 'GET':
                    return ok(mockUsers);
                default:
                    return next.handle(request);
            }
        }

        function authenticate() {
            const { username, password } = body;
            const user = mockUsers.find(x => x.username === username && x.password === password);
            if (!user) return error('Usuário ou senha incorretos');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: any) {
            return throwError({ error: { message } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
