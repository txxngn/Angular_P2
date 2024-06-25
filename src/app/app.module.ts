import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderNgquocthComponent } from './header-ngquocth/header-ngquocth.component';
import { FooterNgquocthComponent } from './footer-ngquocth/footer-ngquocth.component';
import { BooksNgquocthComponent } from './books-ngquocth/books-ngquocth.component';
import { CampusNgquocthComponent } from './campus-ngquocth/campus-ngquocth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNgquocthComponent,
    FooterNgquocthComponent,
    BooksNgquocthComponent,
    CampusNgquocthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
