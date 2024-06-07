import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatDatepickerModule, MatNativeDateModule
} from "@angular/material";
import { TelefoneFormComponent } from './cliente/telefone-form/telefone-form.component';
import { EnderecoFormComponent } from './cliente/endereco-form/endereco-form.component';


@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    FormsModule

  ],
  declarations: [ClienteComponent, TelefoneFormComponent, EnderecoFormComponent]
})
export class ClienteModule { }
