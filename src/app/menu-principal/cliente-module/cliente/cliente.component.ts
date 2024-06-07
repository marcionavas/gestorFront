import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from './service/cliente.service';
import { Cliente } from '../../../models/cliente.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  //Variáveis que alternarão entre PF e PJ:
  nomeRazao: string;
  cpfCnpj: string;
  iDInscEstadual: string;
  apelidoNomeFant: string;
  dataNascFund: string;

  //formulário
  public formulario: FormGroup;
  private cliente: Cliente

  constructor(private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    //this.clienteService.setMainFormGroup(this.formulario);
    this.setPf();
  }

  private createForm() {
    this.formulario = this.formBuilder.group({
      id: [''],
      pessoa: ['pf'],
      nomeRazao: ['', Validators.required],
      apelidoNomeFant: [''],
      iDInscEstadual: [''],
      cpfCnpj: [''],
      dataNascFund: ['']
      //telefonePrincipal:['']

    });
    //this.formulario.valueChanges.subscribe(newVal => console.log("Mudou " + newVal));
  }

  salvarCliente() {

    console.log(this.formulario);
    if (this.formulario.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", { duration: 5000 }
      );
      return;
    }

    let ispj: boolean = false;
    if (this.formulario.get('pessoa').value == "pj") {
      ispj = true;
    }

    if (this.formulario.get('id').value == "") {
      //Cadastro de cliente:
      console.log(this.formulario);
      const cli: Cliente = new Cliente(
        undefined,
        this.formulario.get('nomeRazao').value,
        this.formulario.get('cpfCnpj').value,
        this.formulario.get('iDInscEstadual').value,
        this.formulario.get('apelidoNomeFant').value,
        false,
        false,
        ispj,
        this.formulario.get('dataNascFund').value,
        this.formulario.get('telefonePrincipal').value,
        this.formulario.get('telefones').value,
        this.formulario.get('enderecos').value
      )
      //console.log(JSON.stringify(cli));
      this.clienteService.salvarCliente(cli).subscribe(
        //data = retorno do servidor
        data => {
          console.log(data);

        })
    } else {
      //Editar cliente:
      console.log("edit cliente")
    }

  }

  setPf(): void {
    this.nomeRazao = "Nome Completo:";
    this.apelidoNomeFant = "Apelido:";
    this.cpfCnpj = "CPF:";
    this.iDInscEstadual = "Identidade:";
    this.dataNascFund = "Data de Nascimento:";

  }

  setPj(): void {
    this.nomeRazao = "Razão Social:";
    this.apelidoNomeFant = "Nome Fantasia:";
    this.cpfCnpj = "CNPJ:";
    this.iDInscEstadual = "Inscrição Estadual:";
    this.dataNascFund = "Data de Fundação:";

  }
  voltarMenuPrincipal(): void {
    if (!this.formulario.dirty) {
      this.router.navigate(["/menu"]);
    }
  }

}
