import React, {useEffect, lazy, Suspense} from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import { connect } from "react-redux";
import {checkUserSession } from "./redux/user/user.action";
import Spinner from './components/spinner/spinner'
import ErrorBoundaries from './components/error-boundaries/error-boundaries';

const App = ({checkUser, currentUser}) => {
 
    useEffect(()=>{
      checkUser()
    },[checkUser])
    
    const HomePage = lazy(() => import("./pages/homepage/homepage"));
    const Shop = lazy(() => import("./pages/shop/shop"));
    const SignInSignUp = lazy(() => import("./pages/signin-signup/signin-signup"));
    const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

    return (
      <div>
        <ErrorBoundaries>
        <Header />
        <Switch>
          <Suspense fallback={<Spinner/>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            component={currentUser ? HomePage : SignInSignUp}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
        </ErrorBoundaries>
      </div>
    );
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
