import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/modules/home/home.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { CommonModule } from '@angular/common';
import { FeaturedArticleComponent } from '@app/modules/home/featured-article/featured-article.component';
import { ArticleModule } from '@app/modules/article/article.module';

@NgModule({
  declarations: [FeaturedArticleComponent, HomeComponent, TopArticlesComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ArticleModule],
})
export class HomeModule {}
