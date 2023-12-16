import { Component } from '@angular/core';
import { Article } from '@app/modules/article/article.model';
import { ArticleService } from '@app/modules/article/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles$: Observable<Article[]> = this.articleService.getArticles();

  constructor(private articleService: ArticleService) {}
}
