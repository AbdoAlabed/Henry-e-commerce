import React from "react";

import "./signin.scss";
import FormInput from "../formInput/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handelChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handelSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handelChange}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handelChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
