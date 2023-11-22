import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    ...materialModules
  ]
})
export class SharedModule { }
