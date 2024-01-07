import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ArticleDetailComponent } from '@app/modules/article/article-detail/article-detail.component';
import { ArticleRoutingModule } from '@app/modules/article/article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleDetailComponent, ArticleComponent],
  imports: [CommonModule, SharedModule, ArticleRoutingModule],
  exports: [ArticleComponent],
})
export class ArticleModule {}
