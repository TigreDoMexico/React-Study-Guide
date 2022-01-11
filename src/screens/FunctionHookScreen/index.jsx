import { useEffect, useState } from "react"
import { generateData } from '../../cardsData'
import Card from '../../components/Card';

const FunctionHookScreen = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setCards(generateData())
          }, 1000);
    }, [])

    const onChangeCardTextHandler = (id, text) => {
        const newCards = cards.map((el) => {
            if(el.id === id)
              el.text = text
            
            return el
        })

        setCards(newCards)
    }

    return (
        <div>
          <h1>Hooks Home Screen</h1>
          { cards.length > 0 && cards.map((el) =>
              <Card
                key={el.id}
                data={el}
                onChangeText={onChangeCardTextHandler}
              />
            )
          }
        </div>
    )

}

export default FunctionHookScreen