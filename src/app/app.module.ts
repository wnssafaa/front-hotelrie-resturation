import { NgModule} from '@angular/core';
import {  Routes } from '@angular/router';
import {APOLLO_OPTIONS,ApolloModule} from 'apollo-angular';
import { HttpLink} from 'apollo-angular/http';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {InMemoryCache} from '@apollo/client/core';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService } from '@ngx-translate/core';
import {InstanceConfigHolderService, NgBusyModule} from 'ng-busy';

import {ResturationComponent} from "./resturation/resturation.component";
import {ResturationModule} from "./resturation/resturation.module";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

import {routes} from "./app.routes";
import {MatBadgeModule} from "@angular/material/badge";
import {HotelerieComponent} from "./hotelerie/hotelerie.component";
@NgModule({
  declarations: [ResturationComponent, HotelerieComponent],
  imports: [
    MatListModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatIconModule,RouterOutlet,RouterModule,MatButtonModule, MatBadgeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpClient,
    TranslateService,
    InstanceConfigHolderService,

    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri:'http://127.0.0.1:8000/graphql',
          }),
        };
      },
      deps: [HttpLink],

    },
  ],
})
export class AppModule {
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
