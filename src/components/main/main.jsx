import React from 'react';
import PropTypes from 'prop-types';

import './main.css';
import Title from "../title/title";
import Table from "../table/table";

const Main = () => (
	<main>
		<div className="wrapper">
			<Title title="Список товаров"/>
			<Table/>
		</div>
	</main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
