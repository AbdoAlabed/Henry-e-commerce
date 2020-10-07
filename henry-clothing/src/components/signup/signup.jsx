import React from "react";
import {connect} from "react-redux";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import {signUpStart} from "../../redux/user/user.action"
import FormInput from "../formInput/form-input";
import CustomButton from "../custom-button/custom-button";

import "./signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const {signUpStart} = this.props;
    if (password !== confirmPassword) {
      return alert("password doesn't match");
    }
    signUpStart(email,password, displayName)
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={this.handelSubmit}>
          <h2 className="title"> I DON'T HAVE AN ACCOUNT</h2>
          <span>sign up with your email and password</span>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handelChange={this.handelChange}
            label="display name"
            requerd
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handelChange={this.handelChange}
            label="email"
            requerd
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handelChange={this.handelChange}
            label="password"
            requerd
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handelChange={this.handelChange}
            label="confirm password"
            requerd
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
  }
}

export default connect(null,mapDispatchToProps)(SignUp);
