import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { LoginModule } from './auth/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { MenuRoutingModule } from './menu-principal/menu-principal-routing.module'
import {MenuPrincipalModule} from './menu-principal/menu-principal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    
    LoginModule,
    LoginRoutingModule,
    MenuRoutingModule,
    MenuPrincipalModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
