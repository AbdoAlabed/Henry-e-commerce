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
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     console.log(userAuth)
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         },
    //       });
    //     });
    //   } else {
    //     console.log(userAuth)
    //     setCurrentUser(userAuth);
    //   }
    // });
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



export default connect(mapStateToProps)(App);
