import React from 'react';
import PropTypes from 'prop-types';

import './table.css';
import Row from "../row/row";

const items = [
	{
		'name': 'Супер товар',
		'rating': 2.87,
		'trend': 1,
		'price': 4,
		'reviews': 5,
	},
	{
		'name': 'Тоже хороший товар',
		'rating': 1.94,
		'trend': 14,
		'price': 4,
	},
	{
		'name': 'Неплохой товар',
		'rating': 1.69,
		'trend': 4,
		'price': 3,
	},
	{
		'name': 'Такой себе товар',
		'rating': 0.46,
		'trend': -17,
		'price': 1,
		'inCart': true,
	},
];

const Table = () => (
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
		{items.map(({name, rating, trend, price, reviews, inCart}, index) => (
			<Row num={index + 1}
				name={name}
				rating={rating}
				trend={trend}
				price={price}
				reviews={reviews}
				inCart={inCart}
			/>
		))}
		</tbody>
	</table>
);

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
