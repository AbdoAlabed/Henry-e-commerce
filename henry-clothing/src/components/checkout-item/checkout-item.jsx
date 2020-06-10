import React from "react";

import "./checkout-item.scss";
import { connect } from "react-redux";
import { clearItem, cartItem, removeItem } from "../../redux/cart/cart.action";
const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
  const { imageUrl, name, quintity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quintity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(cartItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
