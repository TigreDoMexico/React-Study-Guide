import { LOGOUT_USER, SET_USER_DATA } from "./types"

export const initialState = {
  name: '',
  email: '',
  login: ''
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
          return { ...state, ...action.user }
        case LOGOUT_USER:
          return initialState
        default:
          return state;
    }
}