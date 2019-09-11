import React from 'react'
import PropTypes from 'prop-types'
import FixedBlock from "../../containers/fixedblock/fixedblock"

const Footer = ( { showFixedBlock } ) => (
	<footer>
		{showFixedBlock && (<FixedBlock />)}
	</footer>
);

Footer.propTypes = {
	showFixedBlock: PropTypes.bool
};

Footer.defaultProps = {
	showFixedBlock: false
};

export default Footer;