import { Component, Input } from '@angular/core';
import { Article } from '@app/modules/article/article-detail/article.service';

// TODO Standalone component
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  @Input({ required: true }) article!: Article;
}
