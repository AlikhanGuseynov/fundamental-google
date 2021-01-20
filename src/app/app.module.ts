import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './page/main/main.component';
import {MobileNavMenuComponent} from './components/mobile-nav-menu/mobile-nav-menu.component';
import {RepairProductComponent} from './page/repair-product/repair-product.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ProblemTypeComponent } from './page/problem-type/problem-type.component';
import { BrandsComponent } from './page/brands/brands.component';
import {FormsModule} from '@angular/forms';
import { IssueInDetailComponent } from './page/issue-in-detail/issue-in-detail.component';
import { AddressComponent } from './page/address/address.component';
import { ContactInfoComponent } from './page/contact-info/contact-info.component';
import { SuccessfulConfirmationComponent } from './page/successful-confirmation/successful-confirmation.component';
import { DateComponent } from './page/date/date.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MobileNavMenuComponent,
    RepairProductComponent,
    ProblemTypeComponent,
    BrandsComponent,
    IssueInDetailComponent,
    AddressComponent,
    ContactInfoComponent,
    SuccessfulConfirmationComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
