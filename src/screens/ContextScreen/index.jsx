import LoginInput from "../../components/LoginInput"
import UserInfo from "../../components/UserInfo"
import useUserContext from "../../hooks/useUserContext"

const ContextScreen = () => {
    const { saveUser } = useUserContext()

    const onSubmitLogin = (e) => {  
        const login = e.target.login.value
        const email = e.target.email.value

        saveUser({
          userName: login,
          userEmail: email
        })
    }

    return (
      <div>
          <h1>Screen usando o Context</h1>
          <UserInfo />
          <LoginInput submit={onSubmitLogin}/>
      </div>
    )

}

export default ContextScreen