import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/modules/home/home.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from '@app/modules/home/featured/featured.component';

@NgModule({
  declarations: [FeaturedComponent, HomeComponent, TopArticlesComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
