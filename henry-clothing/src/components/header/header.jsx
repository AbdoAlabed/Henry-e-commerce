import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {HeaderContainer, LogContainer, OptionsContainer, OptionContainer} from './header.styles'
import {signOutStart} from '../../redux/user/user.action'

const Header = ({ history, match, currentUser, toggleHidden, signOut }) => {
  return (
    <HeaderContainer>
      <LogContainer></LogContainer>
      <OptionsContainer>
        <OptionContainer onClick={() => history.push(`${match.url}shop`)}>
          SHOP
        </OptionContainer>
        <OptionContainer>CONTACT</OptionContainer>
        {currentUser ? (
          <OptionContainer onClick={() =>signOut() }>
            SIGN OUT
          </OptionContainer>
        ) : (
          <OptionContainer onClick={() => history.push("/signin")}>
            SIGN IN
          </OptionContainer>
        )}
        <CartIcon />
      </OptionsContainer>
      {toggleHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    toggleHidden: state.cart.hidden,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=> dispatch(signOutStart()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));
