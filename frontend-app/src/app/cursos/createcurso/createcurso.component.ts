import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/entities/curso';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-createcurso',
  templateUrl: './createcurso.component.html',
  styleUrls: ['./createcurso.component.css']
})

@Injectable({ providedIn: 'root' })
export class CreatecursoComponent implements OnInit {
  form = new FormGroup({
    descripcion: new FormControl('', Validators.required)
  });

  constructor(private route: Router, private service: CursoService) {

  }


  public redirect(path: string): void {
    this.route.navigateByUrl(path);
  }

  ngOnInit() {
  }

  /**
   * agregarCurso
   */
  public agregarCurso(): void {
    let curso: Curso = { id: null, descripcion: this.form.get("descripcion").value };
    console.log(curso);
    this.service.AddCurso(curso);
  }


}
