import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactsState } from "../states/contacts.state";

export const featuresSelector = createFeatureSelector<ContactsState>('contacts');
export const contactsSourceSelector = createSelector(
  featuresSelector, state => state.data
)
export const contactsLengthSelector = createSelector(
  featuresSelector, state => state.length
)
