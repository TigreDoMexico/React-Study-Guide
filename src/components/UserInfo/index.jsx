import useUserContext from "../../hooks/useUserContext"

const UserInfo = () => {
    const { user } = useUserContext()

    return (
      <div>
        { !user.userName && <>Usuário Não Logado</> }
        { user.userName && <>Bem-vindo {user.userName}</> }
      </div>
    )
}

export default UserInfo