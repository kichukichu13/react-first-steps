import React, { Fragment } from 'react';
import './ShoppingCart.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cart from "../../components/cart/cart";

function ShoppingCart() {
	return (
		<Fragment>
			<Header/>
			<Cart/>
			<Footer/>
		</Fragment>
	);
}

export default ShoppingCart;
