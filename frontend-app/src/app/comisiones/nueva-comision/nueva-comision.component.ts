import { Component, OnInit, Output } from '@angular/core';
import { ComisionService } from 'src/app/services/comision.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comision } from 'src/app/entities/comision';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { EventEmitter } from '@angular/core';
import { INewForm } from 'src/app/util/INewForm';
import * as customarAction from 'src/app/stores/actions/comisiones'
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromComision from 'src/app/stores/reducers/comisiones'


@Component({
  selector: 'app-nueva-comision',
  templateUrl: './nueva-comision.component.html',
  styleUrls: ['./nueva-comision.component.css']
})
export class NuevaComisionComponent implements OnInit {

  constructor(private store: Store<fromComision.AppState>, private router: Router) { }

  @Output() modoFormEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {

  }

  form = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required)
  });

  Add(): void {
    let comision: Comision = {
      id: null,
      descripcion: this.form.get("descripcion").value,
      nivel: Number(this.form.get("nivel").value)
    };
    this.store.dispatch(new customarAction.CreateComision(comision));
    this.form.reset();
    this.router.navigate(['comisiones']);
  }




}
