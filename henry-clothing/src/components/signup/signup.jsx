import React, {useState} from "react";
import {connect} from "react-redux";
import {signUpStart} from "../../redux/user/user.action"
import FormInput from "../formInput/form-input";
import CustomButton from "../custom-button/custom-button";

import "./signup.scss";

const SignUp = ({signUpStart}) =>{
  
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

const { displayName, email, password, confirmPassword } = userCredential;

 const handelChange = (e) => {
    const { name, value } = e.target;
    setUserCredential({...userCredential, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("password doesn't match");
    }
    signUpStart(email,password, displayName)
  };

    return (
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handelSubmit}>
          <h2 className="title"> I DON'T HAVE AN ACCOUNT</h2>
          <span>sign up with your email and password</span>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handelChange={handelChange}
            label="display name"
            requerd
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handelChange={handelChange}
            label="email"
            requerd
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handelChange={handelChange}
            label="password"
            requerd
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handelChange={handelChange}
            label="confirm password"
            requerd
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => {
  return{
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
  }
}

export default connect(null,mapDispatchToProps)(SignUp);
