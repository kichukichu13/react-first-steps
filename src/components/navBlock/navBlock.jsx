import React from 'react'
import {Link} from 'react-router-dom'

import './navBlock.css'
import Title from "../title/title"
import Wrapper from "../wrapper/wrapper"

const NavBlock = () => (
	<main>
		<Wrapper>
			<Title title="Главная"/>
			<ul>
				<li><Link to="/" >Главная</Link></li>
				<li><Link to="/goods" >Каталог</Link></li>
				<li><Link to="/shopping_cart" >Корзина</Link></li>
			</ul>
		</Wrapper>
	</main>
);

export default NavBlock;