import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './footer.css';

class Footer extends Component {
	state = {
		count: this.props.count
	}

	static bitGetDeclNum(value, status) {
		var array = [2, 0, 1, 1, 1, 2];
		return status[(value % 100 > 4 && value % 100 < 20) ? 2 : array[(value % 10 < 5) ? value % 10 : 5]];
	}

	render() {
		const { count } = this.state;
		const toCartBlockClass = count? ' have-some': '';

		return (
			<footer>
				<div className={'to-cart-block' + toCartBlockClass}>
					<div className="wrapper">
						{count
							? (
								<span className="have-item-text">
									Вы выбрали <span className="count">{count}</span> товар{this.bitGetDeclNum(count, ['', 'а', 'ов'])}
									<button type="button">ПЕРЕЙТИ В КОРЗИНУ</button>
								</span>
							)
							: (<span className="no-item-text">Пожалуйста, отметьте галочками несколько товаров</span>)
						}
					</div>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	count: PropTypes.number
};

Footer.defaultProps = {
	count: 0
};

export default Footer;