import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TicketState } from "../store/states/tickets-state";
import { ticketReducer } from "../store/reducers/tickets-reducer";
import { ContactsState } from "../store/states/contacts.state";
import { contactsReducer } from "../store/reducers/contacts.reducer";

export interface State {
  tickets: TicketState,
  contacts: ContactsState
}

export const reducers: ActionReducerMap<State> = {
  tickets: ticketReducer,
  contacts: contactsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
