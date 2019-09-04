import React from 'react';
import PropTypes from 'prop-types';

import './navBlock.css';
import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";

const NavBlock = () => (
	<main>
		<Wrapper>
			<Title title="Главная"/>
			<ul>
				<li><a href="/" >Главная</a></li>
				<li><a href="/goods" >Каталог</a></li>
				<li><a href="/shopping_cart" >Корзина</a></li>
			</ul>
		</Wrapper>
	</main>
);

NavBlock.propTypes = {};

NavBlock.defaultProps = {};

export default NavBlock;
