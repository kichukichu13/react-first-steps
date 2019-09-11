import { ADD_TO_CART } from '../constants'
export const addIdNameToCart = (id, name) => {
	return {
		type: ADD_TO_CART,
		id,
		name
	};
}