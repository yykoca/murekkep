import { Component, HostListener } from '@angular/core';
import { Article } from '@app/modules/article/article.model';
import { ArticleService } from '@app/modules/article/article.service';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles$: Observable<Article[]> = this.articleService.getArticles();
  index = new BehaviorSubject(0);
  articlePerPage = new BehaviorSubject(1);

  screenWidth!: number;

  displayedArticles = combineLatest([
    this.articleService.getArticles(),
    this.index,
    this.articlePerPage,
  ]).pipe(
    map(([articles, index, articlePerPage]) =>
      articles.slice(index, index + articlePerPage)
    )
  );

  constructor(private articleService: ArticleService) {
    this.getScreenSize();
  }

  changeArticle(value: number) {
    this.index.next(this.index.value + value);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if (window.innerWidth < 768) {
      this.articlePerPage.next(1);
    } else if (window.innerWidth < 1280) {
      this.articlePerPage.next(2);
    } else if (window.innerWidth < 1536) {
      this.articlePerPage.next(3);
    } else {
      this.articlePerPage.next(4);
    }
  }
}
