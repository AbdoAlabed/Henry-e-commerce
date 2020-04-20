import React from "react";
import "./signin-signup.scss";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";
const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInSignUp;
