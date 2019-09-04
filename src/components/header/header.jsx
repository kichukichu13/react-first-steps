import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import HeaderNavPanel from "../headerNavPanel/headerNavPanel";

const Header = () => (
    <header>
		<HeaderNavPanel/>
	</header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
