import { Ticket } from "../../core/models/ticket";

export interface TicketState {
  data: Ticket[],
  length?: number
}

export const initialTicketState: TicketState = {
  data: [],
  length: 0
}
