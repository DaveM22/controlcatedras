import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entities/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  public agregarPersona(p: Persona): void {
    this.http.post<Persona>('http://localhost:8080/api/personas', p).subscribe();
  }

  public listaPersonas(): Observable<Persona> {
    return this.http.get<Persona>('http://localhost:8080/api/personas');
  }


}
