import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@app/core/page-not-found/page-not-found.component';
import { SelectedArticlesComponent } from '@app/modules/article/selected-articles/selected-articles.component';
import { AboutComponent } from '@app/shared/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tum-yazilar',
    loadChildren: () =>
      import('./modules/article/article.module').then(m => m.ArticleModule),
  },
  {
    path: 'secme-siirler',
    component: SelectedArticlesComponent,
  },
  { path: 'hakkimda', component: AboutComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
