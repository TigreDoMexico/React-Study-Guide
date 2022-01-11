const LoginInput = ({ submit }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        submit(e)
    }

    return (
    <form onSubmit={onSubmit}>
        <label htmlFor="Login">Login do Usuário</label>
        <input id="Login" name="login" placeholder="Login"/>
        <label htmlFor="Email">Email do Usuário</label>
        <input id="Email" name="email" placeholder="Email"/>

        <button type="submit">Enviar</button>
    </form>)   

}

export default LoginInput