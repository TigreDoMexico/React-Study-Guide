import MyInput from "../MyInput"

const Card = ({ data, onChangeText }) => {
    const onChangeInput = (e) => {
        onChangeText(data.id, e.target.value)
    }

    return (
        <div>
            <h3>{data.text}</h3>
            <MyInput 
              label={`Meu Input ${data.id}`}
              value={data.text}
              onChange={onChangeInput}
              placeholder='Escreva um texto aqui'
            />
        </div>
    )
}

export default Card