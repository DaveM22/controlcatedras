import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/entities/persona';
import { TipopersonaService } from 'src/app/services/tipopersona.service';
import { TipoPersona } from 'src/app/entities/tipopersona';

@Component({
  selector: 'app-nuevapersona',
  templateUrl: './nuevapersona.component.html',
  styleUrls: ['./nuevapersona.component.css']
})
export class NuevapersonaComponent implements OnInit {

  form = new FormGroup({
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    legajo: new FormControl('', Validators.required),
    legajoNumber: new FormControl('', Validators.required)
  });

  tipos: any[] = [];
  constructor(private service: PersonaService, private TipopersonaService: TipopersonaService) { }

  ngOnInit() {
    this.traerListaTipoPersona();
  }

  public agregarPersona(): void {
    let persona: Persona = {
      idpersona: null,
      dni: this.form.get('dni').value,
      nombre: this.form.get('nombre').value,
      apellido: this.form.get('apellido').value,
      email: this.form.get('email').value,
      legajo: this.form.get('legajo').value,
    }

    this.service.agregarPersona(persona);

  }
  legajoNumber

  public traerListaTipoPersona(): void {
    this.TipopersonaService.listaTipoPersona().subscribe({
      next: (x: TipoPersona[]) => { this.tipos = x },
      error: (error: any) => { console.log('error') }
    });
  }


}
