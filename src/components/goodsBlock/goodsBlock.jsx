import React from 'react';
import PropTypes from 'prop-types';

import './goodsBlock.css';
import Title from "../title/title";
import Table from "../../containers/table/table";
import Wrapper from "../../components/wrapper/wrapper";

const GoodsBlock = () => (
	<main>
		<Wrapper>
			<Title title="Список товаров"/>
			<Table/>
		</Wrapper>
	</main>
);

GoodsBlock.propTypes = {};

GoodsBlock.defaultProps = {};

export default GoodsBlock;
