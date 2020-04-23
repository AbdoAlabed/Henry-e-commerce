import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";

import "./header.scss";

const Header = ({ history, match, currentUser }) => {
  return (
    <div className="header">
      <div className="log-container"></div>
      <div className="options">
        <h4 onClick={() => history.push(`${match.url}shop`)} className="option">
          SHOP
        </h4>
        <h4 className="option">CONTACT</h4>
        {currentUser ? (
          <h4 className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </h4>
        ) : (
          <h4 className="option" onClick={() => history.push("/signin")}>
            SIGN IN
          </h4>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
