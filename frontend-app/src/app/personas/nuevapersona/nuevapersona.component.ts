import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/entities/persona';
import { TipopersonaService } from 'src/app/services/tipopersona.service';
import { TipoPersona } from 'src/app/entities/tipopersona';
import { INewForm } from 'src/app/util/INewForm';

@Component({
  selector: 'app-nuevapersona',
  templateUrl: './nuevapersona.component.html',
  styleUrls: ['./nuevapersona.component.css']
})
export class NuevapersonaComponent implements INewForm {
  PersonaGenerated: Persona = null;
  @Output() modoFormEvent: EventEmitter<Object> = new EventEmitter<string>();
  form = new FormGroup({
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    legajo: new FormControl('', Validators.required),
    legajoNumber: new FormControl('', Validators.required)
  });

  constructor(private service: PersonaService) { }

  ngOnInit() { }

  Add(): void {
    let persona: Persona = {
      idpersona: null,
      dni: this.form.get('dni').value,
      nombre: this.form.get('nombre').value,
      apellido: this.form.get('apellido').value,
      email: this.form.get('email').value,
      legajo: this.form.get('legajo').value,
    }
    this.service.AddPersona(persona).subscribe(x => this.PersonaGenerated = x);
    this.ReturnToListEvent();
  }
  ReturnToListEvent(): void {
    this.modoFormEvent.emit({ modo: 'R', per: this.PersonaGenerated });
  }
  cancelCreate(): void {
    this.modoFormEvent.emit({ modo: 'R' });
  }

}
