function Welcome(props) {
const { nome, sobrenome } = props;

console.log(nome, sobrenome)
    return(
        <h1>Olá, {nome} {sobrenome} seja bem vindo !</h1>
    )
}

export default Welcome;