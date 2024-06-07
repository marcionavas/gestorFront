import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Login } from "../../models/login.model"
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    this.isLoggedin();

    this.createForm();
  }


  /**
   * Testa se há um token em localStorage, se houver é feito uma cópia
   * para sessionStorage e redireciona para /menu
   * Se apenas houver token em SessionStorage também é redirecionado
   */
  private isLoggedin() {

    if (!(localStorage.getItem('token') === "") && localStorage.getItem('token') != null) {
      sessionStorage['token'] = localStorage['token']
      this.router.navigate(['/menu']);
    } else if (!(sessionStorage.getItem('token') === "") && sessionStorage.getItem('token') != null) {
      this.router.navigate(['/menu']);
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      rememberme: []
    });
  }

  public doLogin() {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", { duration: 5000 }
      );
      return;
    }


    const login: Login = new Login(
      this.form.get("username").value,
      this.form.get("password").value
    )

    this.loginService.login(login)
      .subscribe(
        //data = retorno do servidor
        data => {

          //pegar token do header
          let token = data.headers.get('Authorization')

          console.log("Remember-me?" + this.form.get("rememberme").value)

          if (this.form.get("rememberme").value) {
            localStorage['token'] = token
            sessionStorage['token'] = token

          } else {
            sessionStorage['token'] = token
            console.log('salvando em session')
          }
          this.router.navigate(['/menu']);
        },
        erro => {

          console.log(erro['status'])

          let msg: string = "Ocorreu um erro ao conectar";
          if (erro['status'] == 403) {
            msg = "Usuário ou senha inválido(s)";
          }

          this.snackBar.open(
            msg, "Tente novamente", { duration: 4000 }
          );

        }

      )

  }

}
