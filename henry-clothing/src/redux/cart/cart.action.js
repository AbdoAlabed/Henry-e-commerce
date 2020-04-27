export const toggleCartHidden = () => {
  return {
    type: "TOGGLE_CART_HIDDEN",
  };
};
export const cartItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
