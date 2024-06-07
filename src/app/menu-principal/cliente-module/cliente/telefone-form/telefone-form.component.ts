import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Telefone } from '../../../../models/telefone.model';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'telefone-form',
  templateUrl: './telefone-form.component.html',
  styleUrls: ['./telefone-form.component.css']
})

@NgModule({
  imports: [
    CommonModule

  ]
})

export class TelefoneFormComponent implements OnInit {
  @Input() group: FormGroup;

  telefones: Telefone[] = [
    new Telefone(undefined, undefined, undefined, undefined)
  ]

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.group.addControl("telefones", this.formBuilder.array([]));
    this.setTelefonesOnForm();
  }

  setTelefonesOnForm() {
    let control = <FormArray>this.group.controls.telefones;
    this.telefones.forEach(telefone => {
      control.push(this.formBuilder.group({
        "id": telefone.id,
        "telefone": telefone.telefone,
        "sobre": telefone.sobre,
        "principal": "10"
      }))
    });

  }

  addTelefone() {
    let control = <FormArray>this.group.controls.telefones;
    let telefone = new Telefone(undefined, undefined, undefined, undefined);
    control.push(this.formBuilder.group({
      "id": telefone.id,
      "telefone": telefone.telefone,
      "sobre": telefone.sobre,
      "principal": "20"
    }))
  }

  removeTelefone(index: number) {
    let control = <FormArray>this.group.controls.telefones;
    if (control.length > 1) {
      control.removeAt(index);
    }
  }


  teste(): void {
    console.log(this.group);
  }

}
// export class PfFormComponent implements OnInit, OnDestroy {
//   sharedForm: FormGroup;
//   constructor(private clienteService: ClienteService) {
//     this.clienteService.formGroupShared$.subscribe(
//       formulario => {
//         this.sharedForm = formulario;
//       });
//   }