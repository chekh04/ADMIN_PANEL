import { createAction, props } from "@ngrx/store";
import { Ticket } from "../../core/models/ticket";
import { AddTicketData } from "../../pages/client/dialogs/add-ticket-dialog/add-ticket-dialog.component";

export const invokeEffect = createAction("[TICKET] Invoke effect");
export const updateState = createAction("[TICKET] Update state", props<{ data: any, length: number }>());

export const invokeEffectOnTogglePage = createAction("[TICKET] Invoke effect on toggle", props<{ index: number, size: number }>());
export const updateStateData = createAction("[TICKET] Update state data", props<{ data: Ticket[] }>());

export const invokeEffectOnSort = createAction("[TICKET] Invoke sort effect");
export const invokeAddTicketEffect = createAction("[TICKET] Invoke effect ticket Add", props<{data: AddTicketData}>())
