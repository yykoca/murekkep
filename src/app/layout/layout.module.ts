import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from 'src/app/layout/featured/featured.component';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [CommonModule],
  exports: [FeaturedComponent],
})
export class LayoutModule {}
