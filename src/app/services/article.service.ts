import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/domain/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://api.mynews.com/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${article.id}`, article);
  }

  deleteArticle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
