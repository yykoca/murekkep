import { Component } from '@angular/core';
import {
  Article,
  ArticleService,
} from '@app/modules/article/article-detail/article.service';
import { Observable, map } from 'rxjs';

// TODO Standalone component
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  featuredArticle$: Observable<Article> = this.articleService
    .getArticles()
    .pipe(map(articles => articles.articles[0]));

  constructor(private articleService: ArticleService) {}
}
