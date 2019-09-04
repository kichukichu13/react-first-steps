import React from 'react';

import './cart.css';
import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import CartItems from "../../containers/cartItems/cartItems";

const texts = [
	'Мы классные.',
	'Мы классные и очень-очень крутые.',
	'Даже сложно описать всю нашу крутость :)',
];

const Cart = () => (
	<main>
		<Wrapper>
			<Title title="Ваши товары"/>
			<CartItems />
			<div>
				<div><h3>Преимущества покупок у нас</h3></div>
				<div>
					{texts.map((name, index) => (
						<div>
							<span>{index}</span>
							<span>{name}</span>
						</div>
					))}
				</div>
				<div>
					<span>И это все для вас</span>
				</div>
			</div>
		</Wrapper>
	</main>
);

export default Cart;
