import { addItemToCart } from "./cart.utils";
import { deleteItemFromCart, removeItemFromItems } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromItems(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
