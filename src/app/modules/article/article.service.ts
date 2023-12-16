import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Article } from '@app/modules/article/article.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly articlesUrl = 'articles';
  private readonly articleUrl = 'article';

  constructor(private apiService: ApiService) {}

  getArticles(): Observable<Article[]> {
    return this.apiService
      .get<{ articles: Article[] }>(this.articlesUrl)
      .pipe(map(data => data.articles));
  }

  getArticle(slug: string | null): Observable<Article> {
    return this.apiService
      .get<{ article: Article }>(this.articleUrl + '/' + slug)
      .pipe(map(data => data.article));
  }
}
