import React from 'react'
import PropTypes from 'prop-types'

import './row.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const Row = ({id, num, name, rating, trend, price, reviews, actionCart, inCart}) => {
	const trendText = trend > 0 ? '+' + trend : (trend < 0 ? trend : '–');
	const trendClass = trend > 0 ? 'positive' : (trend < 0 ? 'negative' : '');

	return (
		<tr className="item-row">
			<td className="item-column num">{num}</td>
			<td className="item-column name">{name}</td>
			<td className="item-column rating">{rating ? rating : '–'}</td>
			<td className={'item-column trend ' + trendClass}>{trendText}</td>
			<td className="item-column price">
				{price > 0 && (<span className="price-border">{'₽'.repeat(price)}</span>)}
			</td>
			<td className="item-column reviews">
				{reviews && (<span><FontAwesomeIcon className="stroke-no-fill" icon={faComment} />{reviews}</span>)}
			</td>
			<td className="item-column cart">
				<label className="container" htmlFor={id}>
					<input
						onChange={() => actionCart(id)}
						type="checkbox" id={id}
						name={id}
						value={name}
						checked={inCart}
					/>
					<span className="checkmark"/>
				</label>
			</td>
		</tr>
	)
};


Row.propTypes = {
	id: PropTypes.number,
	num: PropTypes.number,
	name: PropTypes.string,
	rating: PropTypes.number,
	trend: PropTypes.number,
	price: PropTypes.number,
	reviews: PropTypes.number,
	actionCart: PropTypes.func,
};

Row.defaultProps = {
	num: '-',
	name: '-',
	rating: 0,
	trend: 0,
	price: 0,
	reviews: 0,
	actionCart: () => {}
};

export default Row;