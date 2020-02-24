import { Injectable } from '@angular/core';
import { Comision } from '../entities/comision';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  constructor(private http: HttpClient) { }

  public GetById(id: string): Observable<Comision> {
    return this.http.get<Comision>('http://localhost:8080/api/comisiones/' + id).pipe();
  }

  public GetAll(): Observable<Comision[]> {
    return this.http.get<Comision[]>('http://localhost:8080/api/comisiones');
  }

  public AddComision(com: Comision): Observable<Comision> {
    return this.http.post<Comision>('http://localhost:8080/api/comisiones', com).pipe();
  }

  public UpdateComision(com: Comision): Observable<Comision> {
    return this.http.put<Comision>('http://localhost:8080/api/comisiones', com).pipe();
  }

}
