import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@app/services/article.service';
import { Article } from 'src/domain/models/article';

@Component({
  imports: [
    FormsModule
  ],
  standalone: true,
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  article: Article = {
    title: '',
    content: '',
    author: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  isEditMode = false;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.articleService.get(id).subscribe(article => this.article = article);
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.articleService.update(this.article).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    } else {
      this.articleService.add(this.article).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }
}
