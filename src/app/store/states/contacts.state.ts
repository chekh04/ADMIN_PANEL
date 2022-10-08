import { Contact } from "../../core/models/contact-model";

export interface ContactsState {
  data?: Contact[],
  length: number
}

export const initialContactsState: ContactsState =  {
  length: 0
}
