export interface UserState {
  userInfo: {
    name: string,
    surname: string,
    email: string
  }
}

export const initialUserState: UserState | undefined = {
  userInfo: undefined
};
