import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../entities/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  public AddCurso(c: Curso): void {
    console.log(c);
    this.http.post('http://localhost:8080/api/cursos', c).subscribe();
  }

  public ActualizarCurso(c: Curso): void {
    this.http.put('http://localhost:8080/api/cursos', c).subscribe();
  }

  public ObtenerCursoPorId(id: string): Observable<Curso> {
    return this.http.get<Curso>('http://localhost:8080/api/cursos/' + id);
  }

}
