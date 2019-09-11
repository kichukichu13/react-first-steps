import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import './index.css'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'

import Index from './pages/index/Index'
import Goods from './pages/goods/Goods'
import ShoppingCart from './pages/shopping_cart/ShoppingCart'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Index}/>
				<Route path="/goods" component={Goods}/>
				<Route path="/shopping_cart" component={ShoppingCart}/>
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();