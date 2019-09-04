import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './row.css';

class Row extends Component {
	constructor(props){
		super(props);

		this.state = {
			inCart: props.inCart
		}
	}

	render() {
		const {num, name, rating, trend, price, reviews, actionCart, inCart} = this.props;
		const trendText = trend > 0 ? '+' + trend : (trend < 0 ? trend : '-');
		const trendClass = trend > 0 ? 'positive' : (trend < 0 ? 'negative' : '');

		return (
			<tr className="item-row">
				<td className="item-column num">{num}</td>
				<td className="item-column name">{name}</td>
				<td className="item-column rating">{rating ? rating : '-'}</td>
				<td className={'item-column trend ' + trendClass}>{trendText}</td>
				<td className="item-column price">
					{price > 0 ? (<span className="price-border">{'Р'.repeat(price)}</span>) : ''}
				</td>
				<td className="item-column reviews">
					{reviews ? <span><i className="fa fa-comment-o"/>{reviews}</span> : ''}
				</td>
				<td className="item-column cart">
					<label className="container" htmlFor={'in_cart_' + num}>
						<input onChange={() => actionCart(name)} type="checkbox" id={'in_cart_' + num} checked={(inCart ? 'checked' : '')}/>
						<span className="checkmark"/>
					</label>
				</td>
			</tr>
		);
	}
}

Row.propTypes = {
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
