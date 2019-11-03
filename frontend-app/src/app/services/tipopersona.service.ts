import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoPersona } from '../entities/tipopersona';

@Injectable({
  providedIn: 'root'
})
export class TipopersonaService {

  constructor(private http: HttpClient) { }


  public listaTipoPersona(): Observable<TipoPersona[]> {
    return this.http.get<TipoPersona[]>('http://localhost:8080/api/tipospersona');
  }


}
