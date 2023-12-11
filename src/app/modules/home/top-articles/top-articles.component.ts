import { Component } from '@angular/core';
import {
  Article,
  ArticleService,
} from '@app/modules/article/article-detail/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss'],
})
export class TopArticlesComponent {
  topArticles$: Observable<{ articles: Article[] }> =
    this.articleService.getArticles();

  constructor(private articleService: ArticleService) {}
}
