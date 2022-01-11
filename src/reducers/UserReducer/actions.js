import { LOGOUT_USER, SET_USER_DATA } from "./types"

export const setUserDataAction = (dispath, data) => dispath({ type: SET_USER_DATA, user: data })
export const logoutUserAction = (dispath) => dispath({ type: LOGOUT_USER })