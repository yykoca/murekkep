import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@app/shared/contact/contact.component';
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
    path: 'articles',
    loadChildren: () =>
      import('./modules/article/article.module').then(m => m.ArticleModule),
  },
  { path: 'iletisim', component: ContactComponent },
  { path: 'hakkimda', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
