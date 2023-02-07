import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ProductFormComponent} from "./pages/product-form/product-form.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductSuggestionComponent } from './pages/product-suggestion/product-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductSuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
