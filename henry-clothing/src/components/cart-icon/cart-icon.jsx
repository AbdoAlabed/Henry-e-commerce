import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = ({ toggelCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggelCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggelCartHidden: () => dispatch(toggleCartHidden()),
  };
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemsCount: cartItems.reduce(
      (priveValue, cartItem) => priveValue + cartItem.quintity,
      0
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
