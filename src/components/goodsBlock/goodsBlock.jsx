import React from 'react'

import './goodsBlock.css'
import Title from "../title/title"
import Table from "../table/table"
import Wrapper from "../../components/wrapper/wrapper"

const GoodsBlock = () => (
	<main>
		<Wrapper>
			<Title title="Список товаров"/>
			<Table/>
		</Wrapper>
	</main>
);

export default GoodsBlock;