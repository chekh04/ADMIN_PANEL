import { createAction, props } from "@ngrx/store";
import { Contact } from "../../core/models/contact-model";
import { AddContactFormModel } from "../../pages/client/dialogs/add-contact-dialog/add-contact-dialog.component";

export const invokeEffectOnInit = createAction("[CONTACT] Invoke effect on initial");
export const invokeEffectOnToggle = createAction("[CONTACT] Invoke toggle effect", props<{index: number, size: number}>());
export const invokeEffectOnContactAdd = createAction("[CONTACT] Invoke Add Contact effect", props<{data: AddContactFormModel}>());

export const updateSource = createAction("[CONTACT] Update state source", props<{data: Contact[]}>());
export const updateSourceLength = createAction("[CONTACT] Update state length", props<{length: number}>());
