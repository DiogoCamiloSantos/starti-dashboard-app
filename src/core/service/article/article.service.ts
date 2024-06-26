import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { RemoteGatewayFactory } from 'src/core/gateway/remote-gateway-factory';
import { ArticleParser } from 'src/core/parser/article/article.parser';
import { RemoteGateway } from 'src/core/gateway/remote.gateway';
import { BackendUrl } from 'src/core/gateway/config/url/back-end.url';
import { IArticle } from '@entities/article/article.interface';
import ITableData from 'src/ui/components/table/interfaces/table-data.interface';
import { UserProfileTableData } from 'src/ui/components/table/models/user-profile-table-data.model';
import Article from '@entities/article/article';

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
        .getObs(new BackendUrl('Articles'))
        .pipe(map((articles: any) => this.articleParser.parseListAsTableData(articles)))
        .subscribe((tableData) => {

      // console.log('teste', tableData);

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
