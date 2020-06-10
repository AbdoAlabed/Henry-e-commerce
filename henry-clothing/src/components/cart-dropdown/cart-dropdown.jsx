import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItems from "../cart-items/cart-items";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, hiddenCartDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItems item={item}></CartItems>;
        })}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          hiddenCartDropdown();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hiddenCartDropdown: () => dispatch(toggleCartHidden()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartDropdown));
