import React from "react";

import "./cart-items.scss";

const CartItems = ({ item: { name, price, imageUrl, quintity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quintity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItems;