import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from '@app/home/featured/featured.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [FeaturedComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [FeaturedComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
