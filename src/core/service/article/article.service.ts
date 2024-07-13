import { Injectable } from '@angular/core';
import Article from '@entities/article/article';
import { BehaviorSubject, Observable, map, of, take } from 'rxjs';
import { BackendUrl } from 'src/core/gateway/config/url/back-end.url';
import { RemoteGatewayFactory } from 'src/core/gateway/remote-gateway-factory';
import { RemoteGateway } from 'src/core/gateway/remote.gateway';
import { ArticleParser } from 'src/core/parser/article/article.parser';
import ITableData from 'src/ui/components/table/interfaces/table-data.interface';
import { TableData } from 'src/ui/components/table/models/table-data.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private remoteGateway: RemoteGateway;
  private articleSubject = new BehaviorSubject<ITableData>({ titles: [], values: [] });
  readonly articles$ = this.articleSubject.asObservable();

  constructor(
    private remoteGatewayFactory: RemoteGatewayFactory
  ) {
    this.remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
  }

  getAll() {
    try {
      return this.remoteGateway
        .get(new BackendUrl('Articles'))
        .pipe(
          take(1),
          map((articles: any) => new TableData(articles, Article)))
        .subscribe((tableData) => this.articleSubject.next(tableData));

    } catch (error) {
      console.error(error);
      throw new Error(`Article service is not available!`);
    }
  }

  getBy(search: string) {
    try {
      return this.remoteGateway
        .post(new BackendUrl('Articles/search'), { search })
        .pipe(          
          take(1),
          map((articles: any) => new TableData(articles, Article)))
        .subscribe((tableData) => this.articleSubject.next(tableData));

    } catch (error) {
      console.error(error);
      throw new Error(`Payment service is not available!`);
    }
  }
}