import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TicketState } from "../store/states/tickets-state";
import { ticketReducer } from "../store/reducers/tickets-reducer";

export interface State {
  tickets: TicketState
}

export const reducers: ActionReducerMap<State> = {
  tickets: ticketReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
