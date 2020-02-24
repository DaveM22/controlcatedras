import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { IListEntityForm } from 'src/app/util/IListEntityForm';
import { Persona } from 'src/app/entities/persona';

@Component({
  selector: 'app-listapersonas',
  templateUrl: './listapersonas.component.html',
  styleUrls: ['./listapersonas.component.css']
})
export class ListapersonasComponent implements IListEntityForm<Persona> {
  constructor(private Service: PersonaService) { }

  ngOnInit(): void {
    this.fillData();
  }

  Selected: Persona = null;
  modoForm: string = "R";
  data: Persona[] = [];
  HabilitarABM: boolean = true;

  fillData(): void {
    this.Service.GetPersonas().subscribe(x => this.data = x);
  }
  onAdd(): void {
    this.modoForm = "C";
  }

  onEdit(entity: Persona): void {
    this.modoForm = "U";
    this.Selected = entity;
  }

  updateModoFormNew(modo: string) {
    throw new Error("Method not implemented.");
  }
  updateModoFormEdit(obj: any): void {
    throw new Error("Method not implemented.");
  }
  updateModoFormDelete(obj: any) {
    throw new Error("Method not implemented.");
  }

}
