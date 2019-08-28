import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ num, name, rating, trend, price, reviews, inCart }) => (
	<tr className="item-row">
		<td className="item-column num">{num}</td>
		<td className="item-column name">{name}</td>
		<td className="item-column rating">{rating}</td>
		<td className="item-column trend">{trend}</td>
		<td className="item-column price">{price}</td>
		<td className="item-column reviews">{reviews}</td>
		<td className="item-column cart"><input type="checkbox" checked={(inCart? 'checked': '')}/></td>
	</tr>
);

Row.propTypes = {
	num: PropTypes.number,
	name: PropTypes.string,
	rating: PropTypes.string,
	trend: PropTypes.string,
	price: PropTypes.number,
	reviews: PropTypes.number,
	cart: PropTypes.number,
	isChecked: PropTypes.number,
};

Row.defaultProps = {};

export default Row;
