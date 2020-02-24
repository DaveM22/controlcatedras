import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/entities/curso';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { INewForm } from 'src/app/util/INewForm';

@Component({
  selector: 'app-createcurso',
  templateUrl: './createcurso.component.html',
  styleUrls: ['./createcurso.component.css']
})

@Injectable({ providedIn: 'root' })
export class CreatecursoComponent implements OnInit {

  form = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    anio: new FormControl('', Validators.required)
  });

  constructor(private route: Router, private service: CursoService) { }

  AddCurso(): void {
    let curso: Curso =
    {
      id: null,
      descripcion: this.form.get("descripcion").value,
      anio: Number(this.form.get('anio').value)
    };
    this.service.AddCurso(curso).subscribe();
    this.route.navigate(['cursos'], { state: { data: history.state.data.push(curso), navigationId: 1 } });
  }

  ReturnToListEvent(): void {
    throw new Error("Method not implemented.");
  }

  cancelNuevo(): void {
    this.route.navigate(["cursos"]);
  }

  ngOnInit() {
    console.log(history.state.data);
  }

}
