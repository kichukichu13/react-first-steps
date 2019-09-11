import React, { Component } from 'react'

import './table.css'
import Row from '../../components/row/row'
import axios from 'axios';

/*const defaultItems = [
  {
    'id': 1,
    'name': 'Супер товар',
    'rating': 2.87,
    'price': 4,
    'reviews': 5,
  },
  {
    'id': 2,
    'name': 'Тоже хороший товар',
    'rating': 1.94,
    'price': 4,
    'trend': 14,
    'inCart': true,
  },
  {
    'id': 3,
    'name': 'Неплохой товар',
    'rating': 1.69,
    'trend': 4,
    'price': 3,
    'inCart': true,
  },
  {
    'id': 4,
    'name': 'Такой себе товар',
    'rating': 0.46,
    'trend': -17,
    'inCart': false,
  },
]*/

class Table extends Component {

  componentDidMount() {
    const thisThis = this;
    axios.get("https://workspace.ru/ajax/test/react-api-test.php")
      .then(function (response) {
        const defaultItems = response.data;
        thisThis.setState({defaultItems});
      })
  }

  render () {
    const defaultItems = this.state && this.state.defaultItems? this.state.defaultItems: [];

    return (
      <table className="items-table">
        <thead>
        <tr className="item-row">
          <th className="item-column num">#</th>
          <th className="item-column name">Название</th>
          <th className="item-column rating">Рейтинг</th>
          <th className="item-column trend">Тренд</th>
          <th className="item-column price">Ценовой сегмент</th>
          <th className="item-column reviews">Отзывы покупателей</th>
          <th className="item-column cart">В корзину</th>
        </tr>
        </thead>
        <tbody>
        {defaultItems.map(({ id, name, rating, trend, price, reviews, inCart }, index) => (
          <Row key={id} num={index + 1} id={id}
               {...{ name, rating, trend, price, reviews, inCart, id }}
          />
        ))}
        </tbody>
      </table>
    )
  }
}

export default Table