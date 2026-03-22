import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleService } from '@app/services/article.service';
import { Article } from 'src/domain/models/article';

@Component({
  imports: [
    RouterModule,
     CommonModule
  ],
  standalone: true,
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAll().subscribe(data => {
      this.articles = data;
    });
  }

  edit(id: string): void {
    // Navegar para a rota de edição
  }

  delete(id: string): void {
    this.articleService.delete(id).subscribe(() => {
      this.articles = this.articles.filter(article => article.id !== id);
    });
  }
}
