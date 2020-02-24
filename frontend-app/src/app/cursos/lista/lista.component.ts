import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/entities/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ListaComponent implements OnInit {
  ngOnInit(): void {
    this.getCursos();
  }
  settings = {
    actions: {
      columnTitle: 'Acciones'
    },
    changeDetection: 'ChangeDetectionStrategy.Default',
    mode: 'external',
    columns: {
      id: {
        title: 'ID',
        valuePreparedFunction: (data) => { return data.id }
      },
      descripcion: {
        title: 'descripcion'
      }
    }
  };

  data: any = [];

  constructor(private httpCliente: HttpClient, private router: Router) {
  }

  public getCursos() {
    this.httpCliente.get<Curso[]>('http://localhost:8080/api/cursos').subscribe(data => { this.data = data; console.log(data) });
  }

  public redirect(pag: string) {
    this.router.navigateByUrl('cursos/' + pag);
  }

  public onEdit(curso) {
    var id = curso.id;
    this.redirect('editar/' + id);
  }

  public AddCurso(): void {
    console.log('asd');
    this.router.navigate(['/cursos/nuevo'], { state: { data: this.data, navigationId: 1 } })
  }

}
