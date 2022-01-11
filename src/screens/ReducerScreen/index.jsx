import LoginInput from "../../components/LoginInput"
import useUserReducer from "../../hooks/useUserReducer"

const ReducerScreen = () => {
    const {
      user,
      onSaveUser,
      logoutUser
    } = useUserReducer()

    const onSubmitLogin = (e) => {  
        const login = e.target.login.value
        const email = e.target.email.value

        onSaveUser({
          name: login,
          email
        })
    }

    return (
      <div>
          <h1>Screen com Reducer</h1>
          { user.name && <div>Bem-Vindo {user.name}</div> }
          <LoginInput submit={onSubmitLogin}/>
          { user.name && <button onClick={logoutUser} >Logout</button> }
      </div>
    )

}

export default ReducerScreen