import { Component, OnInit, Input } from '@angular/core';
import { Comision } from 'src/app/entities/comision';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as comisionActions from 'src/app/stores/actions/comisiones';
import { Router } from '@angular/router';
import * as fromComisiones from "src/app/stores/reducers/comisiones";
@Component({
  selector: 'app-lista-comisiones',
  templateUrl: './lista-comisiones.component.html',
  styleUrls: ['./lista-comisiones.component.css']
})
export class ListaComisionesComponent implements OnInit {

  constructor(private Store: Store<fromComisiones.AppState>, private Router: Router) { }

  comisionSelected: Comision = null;

  modoForm: string = 'R';

  @Input() HabilitarABM: boolean = true;
  data: Observable<Comision[]>

  ngOnInit() {
    this.Store.dispatch(new comisionActions.LoadComisiones());
    this.data = this.Store.pipe(select(fromComisiones.getComisiones))
  }

  public Add(): void {
    this.Router.navigate(['comisiones/nuevo']);
  }

}
