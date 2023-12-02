import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmailSubscriptionComponent } from './email-subscription/email-subscription.component';

const materialModules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [EmailSubscriptionComponent],
  imports: [CommonModule, BrowserAnimationsModule, ...materialModules],
  exports: [EmailSubscriptionComponent, ...materialModules],
})
export class SharedModule {}
