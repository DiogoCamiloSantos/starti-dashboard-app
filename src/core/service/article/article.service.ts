import { Injectable } from '@angular/core';
import Article from '@entities/article/article';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
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

  articleSubject = new BehaviorSubject<ITableData>({ titles: [], values: [] });
  articles$ = this.articleSubject.asObservable();

  constructor(
    private remoteGatewayFactory: RemoteGatewayFactory,
    private articleParser: ArticleParser
  ) {
    this.remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
  }

  getAll() {
    try {
      return this.remoteGateway
        .get(new BackendUrl('Articles'))
        .pipe(map((articles: any) => new TableData(articles, Article)))
        .subscribe((tableData) => {
          console.log(`tableData`, tableData);

          this.articleSubject.next(tableData)
          
        });

    } catch (error) {
      console.error(error);
      throw new Error(`Article service is not available!`);
    }
  }

  getArticles(): Observable<Article[]> {
    return of([]);
  }
}
