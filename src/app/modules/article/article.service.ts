import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Article } from '@app/modules/article/article.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly url = 'articles';

  constructor(private apiService: ApiService) {}

  getArticles(params?: HttpParams): Observable<Article[]> {
    return this.apiService
      .get<Article[]>(this.url, params)
      .pipe(map((res: any) => res['hydra:member']));
  }

  getArticle(slug: string | null): Observable<Article> {
    return this.apiService.get<Article>(this.url + '/' + slug);
  }
}
