import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu-principal.component';
import { MenuRoutingModule } from './menu-principal-routing.module';
import { ClienteModule } from './cliente-module/cliente.module';


@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    ClienteModule
  ],
  declarations: [MenuComponent]
})
export class MenuPrincipalModule { }