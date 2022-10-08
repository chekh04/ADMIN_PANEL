import { createReducer, on } from "@ngrx/store";
import { initialContactsState } from "../states/contacts.state";
import { updateSource, updateSourceLength } from "../actions/contacts.actions";

export const contactsReducer = createReducer(
  initialContactsState,
  on(updateSource, (state, action) => ({
    ...state,
    data: action.data,
  })),
  on(updateSourceLength, (state, action) => ({
    ...state,
    length: action.length,
  })),
)
