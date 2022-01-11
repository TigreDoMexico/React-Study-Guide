import { useReducer } from "react"
import { initialState, UserReducer } from "../reducers/UserReducer"
import { logoutUserAction, setUserDataAction } from "../reducers/UserReducer/actions"

const useUserReducer = () => {
    const [ userState, dispatch ] = useReducer(UserReducer, initialState)

    const onSaveUser = (data) => setUserDataAction(dispatch, data)
    const logoutUser = () => logoutUserAction(dispatch)

    return {
      user: userState,
      onSaveUser,
      logoutUser
    }
}

export default useUserReducer