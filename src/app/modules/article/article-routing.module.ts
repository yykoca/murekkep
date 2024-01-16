import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from '@app/modules/article/article-detail/article-detail.component';
import { ArticleComponent } from '@app/modules/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
  {
    path: 'tum-yazilar/:slug',
    component: ArticleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
