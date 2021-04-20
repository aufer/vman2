import { HttpClient, HttpClientModule }     from '@angular/common/http';
import { NgModule }                         from '@angular/core';
import { ReactiveFormsModule }              from '@angular/forms';
import { BrowserModule }                    from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';
import { AppComponent }                     from './app.component';
import { AppRoutingModule }                 from './app.routing.module';
import { AbiFormsModule, TableModule }      from './components';
import { UserModule }                       from './components/user/user.module';
import { ServicesModule }                   from './services';
import { AppStoreModule }                   from './store/store.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'de'
    }),
    AppRoutingModule,
    TableModule,
    AbiFormsModule,
    ServicesModule,
    UserModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule {
}
