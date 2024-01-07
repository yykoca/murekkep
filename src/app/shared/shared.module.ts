import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EmailSubscriptionComponent } from './email-subscription/email-subscription.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    EmailSubscriptionComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  exports: [
    EmailSubscriptionComponent,
    FooterComponent,
    HeaderComponent,
    RouterModule,
    ...materialModules,
  ],
})
export class SharedModule {}
