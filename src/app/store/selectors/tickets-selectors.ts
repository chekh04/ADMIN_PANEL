import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TicketState } from "../states/tickets-state";

export const featureSelector = createFeatureSelector<TicketState>('tickets');

export const ticketsDataSelector = createSelector(
  featureSelector, state => state.data
)
export const ticketsLengthSelector = createSelector(
  featureSelector, state => state.length
)
