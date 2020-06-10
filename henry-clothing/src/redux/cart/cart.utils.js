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

export const deleteItemFromCart = (currentItems, itemToDelete) => {
  return currentItems.filter((item) => item.id !== itemToDelete.id);
};

export const removeItemFromItems = (currentItems, itemToRemove) => {
  if (itemToRemove.quintity === 1) {
    return currentItems.filter((item) => item.id !== itemToRemove.id);
  } else {
    return currentItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quintity: itemToRemove.quintity - 1 }
        : item
    );
  }
};
