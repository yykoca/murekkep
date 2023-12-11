import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  Article,
  ArticleService,
} from '@app/modules/article/article-detail/article.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent {
  article$: Observable<Article> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      const slug: string | null = params.get('slug');
      return this.articleService.getArticle(slug);
    })
  );

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}
}
