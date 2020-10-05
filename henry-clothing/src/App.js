import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/signin-signup/signin-signup";
import CheckoutPage from "./pages/checkout/checkout";
import {
  auth,
  createUserProfileDocument,
} from ".//components/firebase/firebase.utils";
import { connect } from "react-redux";
import {checkUserSession } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUser } = this.props;
    checkUser()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            component={this.props.currentUser ? HomePage : SignInSignUp}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: ()=> dispatch(checkUserSession())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
