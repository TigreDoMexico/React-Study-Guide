import useCards from "../../hooks/useCards";
import { useMemo } from 'react';
import CardList from '../../components/CardList';

const UseHookScreen = () => {
    const {
      cards,
      loading,
      onChangeCardText,
      onReload
    } = useCards()

    const loadingCard = useMemo(() => {
      console.log('[MEMO FUNCTION]')
      return loading ? <p>Carregando...</p> : null
    }, [loading])

    const notLoadingCardFunction = () => {
      console.log('[NOT MEMO FUNCTION]')
      return loading ? <p>Carregando [2]...</p> : null
    }

    const notLoadingEl = notLoadingCardFunction()

    return (
        <div>
          <h1>Hooks Memo Home Screen</h1>
          <div>
            {loadingCard}
            {notLoadingEl}
            {!loadingCard && 
              <CardList
                cards={cards}
                onChangeText={onChangeCardText}
              />
            }
            <button onClick={onReload}>Reload</button>
          </div>
        </div>
    )

}

export default UseHookScreen