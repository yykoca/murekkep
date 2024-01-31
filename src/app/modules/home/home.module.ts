import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/modules/home/home.component';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { CommonModule } from '@angular/common';
import { ArticleModule } from '@app/modules/article/article.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ArticleModule],
})
export class HomeModule {}
