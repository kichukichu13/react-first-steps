import { ADD_TO_CART } from '../constants'

const inCartItems = (state = {}, { id, name, type }) => {

  switch (type) {
    case ADD_TO_CART:
      if (state[id]) delete state[id]
      else state[id] = name

      return {...state}
    default:
      return state
  }
}

export default inCartItems