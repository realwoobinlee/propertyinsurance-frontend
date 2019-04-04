import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApiService } from '../shared/service/api.service';
import { KategorienGroup } from '../shared/kategorie/kategorie.service';
import { ValidatorService } from '../shared/service/validator.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    KategorienGroup,
    ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
