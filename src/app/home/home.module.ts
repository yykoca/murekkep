import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/home/home.component';
import { LayoutModule } from '@app/layout/layout.module';
import { TopArticlesComponent } from './top-articles/top-articles.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [HomeComponent, TopArticlesComponent],
  imports: [LayoutModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
