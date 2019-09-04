import { ADD_TO_CART } from '../constants';
export const actionCart = (name) => ({
	type: ADD_TO_CART,
	name
});