import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './row.css';

class Row extends Component {
	constructor(props){
		super(props);

		this.state = {
			isChecked: props.inCart
		}
	}

	handleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked
		});
	}

	render() {
		const {num, name, rating, trend, price, reviews} = this.props;
		const trendText = trend > 0 ? '+' + trend : (trend < 0 ? trend : '-');
		const trendClass = trend > 0 ? 'positive' : (trend < 0 ? 'negative' : '');
		const { isChecked } = this.state;

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
					{reviews ? <span><i className="fa fa-comment-o"></i>{reviews}</span> : ''}
				</td>
				<td className="item-column cart">
					<label className="container" htmlFor={'in_cart_' + num}>
						<input onChange={this.handleChange} type="checkbox" id={'in_cart_' + num} checked={(isChecked ? 'checked' : '')}/>
						<span className="checkmark"></span>
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
	isChecked: PropTypes.bool,
};

Row.defaultProps = {
	num: '-',
	name: '-',
	rating: 0,
	trend: 0,
	price: 0,
	reviews: 0,
	isChecked: false,
};

export default Row;
