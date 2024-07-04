import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ArticleDetailComponent } from '@app/modules/article/article-detail/article-detail.component';
import { ArticleRoutingModule } from '@app/modules/article/article-routing.module';
import { ArticleComponent } from './article.component';
import { TranslateDatePipe } from '@app/core/pipes/translate-date.pipe';
import { TopArticlesComponent } from '@app/modules/article/top-articles/top-articles.component';
import { FeaturedArticleComponent } from '@app/modules/article/featured-article/featured-article.component';
import { SelectedArticlesComponent } from '@app/modules/article/selected-articles/selected-articles.component';

@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleComponent,
    TopArticlesComponent,
    FeaturedArticleComponent,
    SelectedArticlesComponent,
  ],
  exports: [ArticleComponent, TopArticlesComponent, FeaturedArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
    TranslateDatePipe,
  ],
})
export class ArticleModule {}
