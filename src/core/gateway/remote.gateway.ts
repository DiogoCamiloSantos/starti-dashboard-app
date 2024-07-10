import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Url } from "./config/url/url";
import { catchError, map } from "rxjs";

export class RemoteGateway {
  constructor(private backendUrl: string, private httpClient: HttpClient) {}

  get(url: Url) {
    return this.httpClient.get(url.getUrl());
  }
  
  post(url: Url, body: any) {
    return this.httpClient.post(url.getUrl(), body);
  }

  private buildUrl(action: string) {
    if (!!action && action.charAt(0) !== '/') {
      action = `/${action}`;
    }
    return `${this.backendUrl}${action}`;
  }
}
