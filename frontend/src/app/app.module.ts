import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeModule } from '@app/modules/home';
import { CoreModule } from '@app/core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent], 
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        HomeModule,
        FontAwesomeModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        provideHttpClient(withInterceptorsFromDi()),
    ]
})

export class AppModule {}
