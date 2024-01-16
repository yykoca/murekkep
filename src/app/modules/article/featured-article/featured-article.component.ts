import { Component, Input } from '@angular/core';
import { Article } from '@app/modules/article/article.model';

// TODO Standalone component
@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss'],
})
export class FeaturedArticleComponent {
  @Input({ required: true }) article!: Article;
}
