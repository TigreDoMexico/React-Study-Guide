import { useState, useEffect, useCallback } from "react"
import { loadDataService } from "../services/CardService";

const useCards = () => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      onLoadData()
    }, [])

    const onLoadData = () => {
      setLoading(true)

      loadDataService().then((data) => {
        setCards(data)
        setLoading(false)
      })
    }

    const onReload = () => onLoadData()

    const onChangeCardText = useCallback((id, text) => {
        const newCards = cards.map((el) => {
            if(el.id === id)
              el.text = text
            
            return el
        })

        setCards(newCards)
    }, [cards])

    return {
      cards,
      loading,
      onChangeCardText,
      onReload
    }
}

export default useCards