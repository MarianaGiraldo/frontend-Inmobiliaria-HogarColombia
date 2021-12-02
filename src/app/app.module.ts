import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/security/general/login/login.component';
import { LogoutComponent } from './modules/security/general/logout/logout.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
