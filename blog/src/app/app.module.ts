import { registerLocaleData } from '@angular/common';
import ukLocale from '@angular/common/locales/uk';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AuthInterceptor } from './shared/components/auth.interceptor';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/components/shared.module';
import { Decode64Pipe } from './shared/decode64.pipe';

registerLocaleData(ukLocale, 'uk');

const INTERCEPTOR_PROVIDERS: Provider ={
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    Decode64Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
