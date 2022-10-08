import { initialUserState } from "../states/user.state";
import { createReducer, on } from "@ngrx/store";
import { addUserInfo } from "../actions/user.actions";

export const userReducer = createReducer(
  initialUserState,
  on(addUserInfo, (state, action) => ({
    ...state,
    userInfo: action.info
  }))

)
