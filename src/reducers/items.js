import { ADD_TO_CART } from '../constants';

const defaultItems = [
	{
		'name': 'Супер товар',
		'rating': 2.87,
		'price': 4,
		'reviews': 5,
	},
	{
		'name': 'Тоже хороший товар',
		'rating': 1.94,
		'price': 4,
		'trend': 14,
	},
	{
		'name': 'Неплохой товар',
		'rating': 1.69,
		'trend': 4,
		'price': 3,
	},
	{
		'name': 'Такой себе товар',
		'rating': 0.46,
		'trend': -17,
		'inCart': false,
	},
];

const items = (state = defaultItems, {name, type}) => {
	switch (type){
		case ADD_TO_CART:
			return [...state].map(item => {
				if(item.name === name) {
					item.inCart = !item.inCart;
				}
				return item;
			});
		default:
			return state;
	}
}

export default items;