import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../../../models/endereco.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {
  @Input() group: FormGroup;
  enderecos: Endereco[] = [
    new Endereco(undefined, undefined, undefined, undefined, undefined, undefined, undefined, true)

  ]


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.group.addControl("enderecos", this.formBuilder.array([]));
    this.setEnderecosOnForm();
  }

  setEnderecosOnForm() {
    let control = <FormArray>this.group.controls.enderecos;
    this.enderecos.forEach(endereco => {
      control.push(this.formBuilder.group({
        "id": endereco.id,
        "endereco": endereco.endereco,
        "complemento": endereco.complemento,
        "cep": endereco.cep,
        "cidade": endereco.cidade,
        "uf": endereco.uf,
        "sobre": endereco.sobre,
        "principal": endereco.principal
      }))
    })

  }

  addEndereco() {
    let control = <FormArray>this.group.controls.enderecos;
    let endereco = new Endereco(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    control.push(this.formBuilder.group({
      "id": endereco.id,
      "endereco": endereco.endereco,
      "complemento": endereco.complemento,
      "cep": endereco.cep,
      "cidade": endereco.cidade,
      "uf": endereco.uf,
      "sobre": endereco.sobre,
      "principal": endereco.principal
    }))
  }

  removeEndereco(index: number) {
    let control = <FormArray>this.group.controls.enderecos;
    if (control.length > 1) {
      control.removeAt(index);
    }
  }

}
