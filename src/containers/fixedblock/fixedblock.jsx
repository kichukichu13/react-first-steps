import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './fixedblock.css';
import {connect} from "react-redux";
import {actionCart} from "../../actions/actionCart";

class FixedBlock extends Component {
	state = {};

	bitGetDeclNum(value, status) {
		var array = [2, 0, 1, 1, 1, 2];
		return status[(value % 100 > 4 && value % 100 < 20) ? 2 : array[(value % 10 < 5) ? value % 10 : 5]];
	}

	render() {
		const { items } = this.props;
		let count = 0;

		for(let item of items){
			if(item.inCart) ++count;
		}


		return (
			<footer>
				<div className={'to-cart-block' + (count? ' have-some': '')}>
					<div className="wrapper">
						{count
							? (
								<span className="item-text">
									Вы выбрали <span className="count">{count}</span> товар{this.bitGetDeclNum(count, ['', 'а', 'ов'])}
									<button class="btn" type="button">ПЕРЕЙТИ В КОРЗИНУ</button>
								</span>
							)
							: (<span className="item-text">Пожалуйста, отметьте галочками несколько товаров</span>)
						}
					</div>
				</div>
			</footer>
		);
	}
}

FixedBlock.propTypes = {
	items: PropTypes.object
};

FixedBlock.defaultProps = {
	items: {}
};

export default connect(state => ({
	items: state.items
}))(FixedBlock);