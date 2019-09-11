import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionCart } from "../../actions/actionCart"

import './table.css'
import Row from "../../components/row/row"

class Table extends Component {

	render() {
		const { items, actionCart } = this.props;

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
				{items.map(({id, name, rating, trend, price, reviews, inCart}, index) => (
					<Row key={id} num={index + 1} id={id}
						 name={name}
						 rating={rating}
						 trend={trend}
						 price={price}
						 reviews={reviews}
						 inCart={inCart}
						 actionCart={actionCart}
					/>
				))}
				</tbody>
			</table>
		);
	}
}

Table.propTypes = {
	items: PropTypes.array,
};

Table.defaultProps = {
	items: []
};

export default connect(state => ({
	items: state.items
}), { actionCart })(Table);
