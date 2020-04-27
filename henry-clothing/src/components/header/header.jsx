import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import "./header.scss";

const Header = ({ history, match, currentUser, toggleHidden }) => {
  return (
    <div className="header">
      <div className="log-container"></div>
      <div className="options">
        <h5 onClick={() => history.push(`${match.url}shop`)} className="option">
          SHOP
        </h5>
        <h5 className="option">CONTACT</h5>
        {currentUser ? (
          <h5 className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </h5>
        ) : (
          <h5 className="option" onClick={() => history.push("/signin")}>
            SIGN IN
          </h5>
        )}
        <CartIcon />
      </div>
      {toggleHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    toggleHidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
