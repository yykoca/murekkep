import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@app/modules/article/article.model';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss'],
})
export class TopArticlesComponent implements OnInit {
  @Input({ required: true }) topArticles!: Article[];

  ngOnInit() {
    this.topArticles = this.topArticles.filter(article =>
      article.title.includes('ın')
    );
  }
}
