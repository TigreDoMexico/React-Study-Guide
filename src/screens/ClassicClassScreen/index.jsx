import React from 'react'
import { generateData } from '../../cardsData'
import Card from '../../components/Card';

class ClassicClassScreen extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        cards: []
      }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({
            cards: generateData()
          })
        }, 1000);
    }

    onChangeCardTextHandler = (id, text) => {
        const cards = this.state.cards.map((el) => {
            if(el.id === id)
              el.text = text
            
            return el
        })

        this.setState({ cards })
    }

    render() {
      const { cards } = this.state

      return (
        <div>
          <h1>Classic Home Screen</h1>
          { cards.length > 0 && cards.map((el) =>
              <Card
                key={el.id}
                data={el}
                onChangeText={this.onChangeCardTextHandler}
              />
            )
          }
        </div>
      )
    }
}

export default ClassicClassScreen;