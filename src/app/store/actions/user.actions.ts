import { createAction, props } from "@ngrx/store";
import { UserInfo } from "../../pages/sign-pages/sign-up/sign-up.component";
import { User } from "../../core/models/user-model";

export const invokeEffectOnAddUserInfo = createAction("[USER] Invoke effect for Info add", props<{userInfo: UserInfo}>());
export const invokeEffectCheckStorage = createAction("[USER] Check storage for User info");
// export const writeInitialUserInfo = createAction("[USER] Write User info", props<{info: User | null}>())
export const addUserInfo = createAction("[USER] Add user info", props<{info: User | null}>());
