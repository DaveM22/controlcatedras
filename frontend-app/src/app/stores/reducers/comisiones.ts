import * as comisionActions from '../actions/comisiones';
import * as fromRoot from 'src/app/stores/state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { Comision } from 'src/app/entities/comision';

export interface ComisionState extends EntityState<Comision> {
    selectedComisionId: Number | null
    loading: boolean,
    loaded: boolean,
    error: string
}


export interface AppState extends fromRoot.AppState {
    comisiones: ComisionState
}

export const comisionAdapter: EntityAdapter<Comision> = createEntityAdapter<Comision>();
export const defaultComision: ComisionState = {
    ids: [],
    entities: {},
    selectedComisionId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = comisionAdapter.getInitialState(defaultComision);

export function comisionReducer(state = initialState,
    action: comisionActions.Action)
    : ComisionState {
    switch (action.type) {
        case comisionActions.ComisionActionTypes.GET_COMISIONES_SUCCESS: {
            return comisionAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }

        case comisionActions.ComisionActionTypes.GET_COMISIONES_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        case comisionActions.ComisionActionTypes.CREATE_COMISION_SUCCESS: {
            return comisionAdapter.addOne(action.payload, state);
        }

        case comisionActions.ComisionActionTypes.CREATE_COMISION_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}


const getComisionFeatureState = createFeatureSelector<ComisionState>(
    "comisiones"
)

export const getComisiones = createSelector(
    getComisionFeatureState,
    comisionAdapter.getSelectors().selectAll
)

export const getComisionesLoading = createSelector(
    getComisionFeatureState,
    (state: ComisionState) => state.loading
)

export const getComisionesLoaded = createSelector(
    getComisionFeatureState,
    (state: ComisionState) => state.loaded
)

export const getComisionesError = createSelector(
    getComisionFeatureState,
    (state: ComisionState) => state.error
)