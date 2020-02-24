import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as comisionActions from 'src/app/stores/actions/comisiones';
import { ComisionService } from 'src/app/services/comision.service';
import { Comision } from 'src/app/entities/comision';

@Injectable()
export class ComisionEffect {
    constructor(
        private actions$: Actions,
        private ComisionService: ComisionService
    ) { }

    @Effect()
    getComisiones: Observable<Action> = this.actions$.pipe(
        ofType<comisionActions.LoadComisiones>(
            comisionActions.ComisionActionTypes.GET_COMISIONES
        ),
        mergeMap((actions: comisionActions.LoadComisiones) => this.ComisionService.GetAll().pipe(
            map((comisiones: Comision[]) => new comisionActions.LoadComisionesSuccess(comisiones),
                catchError(err => of(new comisionActions.LoadComisionesFail(err)))
            )
        )
        )
    )

    @Effect()
    createComision: Observable<Action> = this.actions$.pipe(
        ofType<comisionActions.CreateComision>(
            comisionActions.ComisionActionTypes.CREATE_COMISION
        ),
        map((action: comisionActions.CreateComision) => action.payload),
        mergeMap((comision: Comision) => this.ComisionService.AddComision(comision).pipe(
            map(
                (newComision: Comision) =>
                    new comisionActions.CreateComisionSuccess(newComision)
            ),
            catchError(err => of(new comisionActions.CreateComisionFail(err)))
        ))
    );


}