import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const Header = () => (
	<footer>
		<div className="to-cart-block">
			<div className="wrapper">
				<span className="no-item-text">Пожалуйста, отметьте галочками несколько товаров</span>
			</div>
		</div>
	</footer>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
