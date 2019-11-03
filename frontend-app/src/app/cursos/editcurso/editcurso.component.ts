import { Component, OnInit, Injectable, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/entities/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-editcurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.css']
})

@Injectable({ providedIn: 'root' })
export class EditcursoComponent implements OnInit, AfterViewInit {

  form = new FormGroup({
    descripcion: new FormControl('', Validators.required)
  });
  id: string = '';
  basic: Boolean = false;
  constructor(private service: CursoService, private route: Router, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.aroute.snapshot.paramMap.get("id");
  }

  ngAfterViewInit(): void {
    this.getCursoById(this.id);
  }

  public redirect(path: string) {
    this.route.navigateByUrl(path);
  }

  public async getCursoById(id: string) {
    await this.service.ObtenerCursoPorId(id).subscribe({
      next: (x: Curso) => { this.MappingToForm(x) },
      error: (error: any) => console.log("ERROR")
    });
  }

  public opencloseModal(value: boolean): void {
    this.basic = value;
  }

  public ActualizarCurso(): void {
    let curso: Curso = { id: Number.parseInt(this.id), descripcion: this.form.get('descripcion').value }
    this.service.ActualizarCurso(curso);
    this.basic = false;
    this.opencloseModal(false);
  }

  public MappingToForm(obj: Curso): void {
    this.form.patchValue({ descripcion: obj.descripcion })
  }

}
