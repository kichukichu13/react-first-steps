import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './cartItems.css';
import {connect} from "react-redux";

import { bitGetDeclNum } from "../../helpers/bitGetDeclNum";

class CartItems extends Component{

	render() {
		const { items } = this.props;
		let goods = [];
		let goodsText = '';

		if(items.length){
			for(let item of items){
				if(item.inCart) goods.push(item.name);
			}
		}

		const count = goods.length;
		goodsText = goods.join(', ');

		return (
			<div>
				{count? `Вы выбрали ${count} товар${bitGetDeclNum(count, ['', 'а', 'ов'])}: ${goodsText}`: 'Вы не выбрали ни одного товара'}
			</div>
		);
	}
}

CartItems.propTypes = {
	items: PropTypes.array
};

CartItems.defaultProps = {
	items: []
};

export default connect(state => ({
	items: state.items
}))(CartItems);
