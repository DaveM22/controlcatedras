import { Action } from '@ngrx/store'

import { Comision } from 'src/app/entities/comision';

export enum ComisionActionTypes {
    GET_COMISIONES = "[Comision] Load Comisiones",
    GET_COMISIONES_SUCCESS = "[Comision] Load Comisiones Success",
    GET_COMISIONES_FAIL = "[Customer] Load Customers Fail",
    CREATE_COMISION = "[Comision] Create Comision",
    CREATE_COMISION_SUCCESS = "[Comision] Create Customer Success",
    CREATE_COMISION_FAIL = "[Comision] Create Customer Fail"
}

export class LoadComisiones implements Action {
    readonly type = ComisionActionTypes.GET_COMISIONES;

}

export class LoadComisionesSuccess implements Action {
    readonly type = ComisionActionTypes.GET_COMISIONES_SUCCESS;
    constructor(public payload: Comision[]) {
    }
}

export class LoadComisionesFail implements Action {
    readonly type = ComisionActionTypes.GET_COMISIONES_FAIL;
    constructor(public payload: string) { }
}

export class CreateComision implements Action {
    readonly type = ComisionActionTypes.CREATE_COMISION;
    constructor(public payload: Comision) { }
}

export class CreateComisionSuccess implements Action {
    readonly type = ComisionActionTypes.CREATE_COMISION_SUCCESS;
    constructor(public payload: Comision) { }
}

export class CreateComisionFail implements Action {
    readonly type = ComisionActionTypes.CREATE_COMISION_FAIL;
    constructor(public payload: string) { };
}

export type Action =
    LoadComisiones
    | LoadComisionesSuccess
    | LoadComisionesFail
    | CreateComision
    | CreateComisionSuccess
    | CreateComisionFail;