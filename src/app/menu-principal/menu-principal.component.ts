import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Redirect methods:
  redirectToClientes() {
    this.router.navigate(["/clientes"]);
  }

  redirectToCaixa() {

  }

  redirectToAdmin() {

  }

  redirectToEstoque() {

  }

  redirectToServicos() {

  }

  redirectTofiscal() {

  }
}
