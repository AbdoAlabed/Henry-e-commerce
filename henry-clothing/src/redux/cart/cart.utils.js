export const addItemToCart = (currentItems, itemToAdd) => {
  const existingItem = currentItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingItem) {
    return currentItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quintity: cartItem.quintity + 1 }
        : cartItem
    );
  } else {
    return [...currentItems, { ...itemToAdd, quintity: 1 }];
  }
};
