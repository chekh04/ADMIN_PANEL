import { createReducer, on } from "@ngrx/store";
import { updateState, updateStateData } from "../actions/tickets-actions";
import { initialTicketState } from "../states/tickets-state";

export const ticketReducer = createReducer(
  initialTicketState,
  on(updateState, (state, action) => ({
    ...state,
    data: action.data,
    length: action.length
  })),
  on(updateStateData, (state, action) => ({
    ...state,
    data: action.data
  })),
)
