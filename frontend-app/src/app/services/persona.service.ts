import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entities/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http: HttpClient) { }

  public GetPersonaById(id: string): Observable<Persona> {
    return this.http.get<Persona>('http://localhost:8080/api/comisiones/' + id).pipe();
  }

  public GetPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>('http://localhost:8080/api/personas').pipe();
  }

  public UpdatePersona(per: Persona): Observable<Persona> {
    return this.http.put<Persona>('http://localhost:8080/api/personas', per).pipe();
  }

  public AddPersona(per: Persona): Observable<Persona> {
    return this.http.post<Persona>('http://localhost:8080/api/personas', per).pipe();
  }

  public DeletePersona(id: String): void {
    this.http.delete<Persona>('http://localhost:8080/api/personas' + id).pipe();
  }

}
