import Card from "../Card";
import React from 'react'

const CardList = ({ cards, onChangeText }) => {
    return <div>{
        cards.map((el) =>
        <Card
          key={el.id}
          data={el}
          onChangeText={onChangeText}
        />)
    }</div>;
}

export default React.memo(CardList)

