import React from "react";

import "./checkout.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckButton from "../../components/stripe-button/stripe-button";

import { connect } from "react-redux";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanitiy</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">total: ${total}</div>
      <StripeCheckButton price={total} />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems: cartItems,
    total: cartItems.reduce(
      (currentValue, item) => currentValue + item.quintity * item.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(CheckoutPage);
