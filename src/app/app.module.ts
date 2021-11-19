import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from "@nebular/theme";
import {
  getDeepFromObject,
  NbAuthModule,
  NbPasswordAuthStrategy,
  NbPasswordAuthStrategyOptions,
} from "@nebular/auth";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          baseEndpoint: "https://localhost:5001/api/authentication/",
          name: "email",
          login: {
            alwaysFail: false,
            endpoint: "login",
            method: "post",
            requireValidToken: true,
            redirect: {
              success: "/",
              failure: null,
            },
            defaultErrors: [
              "Login/Email combination is not correct, please try again.",
            ],
            defaultMessages: ["You have been successfully logged in."],
          },
          validation: {
            email: {
              required: true,
              regexp: "[A-Z]+123",
            },
          },
          errors: {
            key: "messages",
            getter: (
              module: string,
              res: HttpErrorResponse,
              options: NbPasswordAuthStrategyOptions
            ) =>
              getDeepFromObject(
                res.error,
                "messages",
                options[module].defaultErrors
              ),
          },
          messages: {
            key: "messages",
            getter: (
              module: string,
              res: HttpResponse<Object>,
              options: NbPasswordAuthStrategyOptions
            ) =>
              getDeepFromObject(
                res.body,
                "messages",
                options[module].defaultMessages
              ),
          },
        }),
      ],

      forms: {},
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
