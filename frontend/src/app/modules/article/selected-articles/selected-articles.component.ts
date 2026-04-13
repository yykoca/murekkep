import { Component } from '@angular/core';
import { Article } from '@app/modules/article/article.model';
import { ArticleService } from '@app/modules/article/article.service';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-selected-articles',
  templateUrl: './selected-articles.component.html',
  styleUrls: ['./selected-articles.component.scss'],
})
export class SelectedArticlesComponent {
  articles$: Observable<Article[]> = this.articleService.getArticles().pipe(
    map(articles =>
      articles.map(article => ({
        ...article,
      }))
    ),
    map(articles =>
      articles.filter(article => article.author.id !== environment.authorId)
    )
  );

  constructor(private articleService: ArticleService) {}
}
