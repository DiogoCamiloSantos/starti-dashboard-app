import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RoutesEnum } from '@app/app.routes';
import Article from '@entities/article/article';
import { ArticleService } from '@services/article/article.service';
import { map } from 'rxjs';
import { UserProfileTableData } from 'src/ui/components/table/models/user-profile-table-data.model';
import { TableComponent } from 'src/ui/components/table/table.component';

@Component({
  imports: [RouterModule, CommonModule, MatButtonModule, TableComponent],
  standalone: true,
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  routes = RoutesEnum;

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAll();
  }

  editArticle(id: string): void {
  }

  deleteArticle(id: string): void {
  }
}
