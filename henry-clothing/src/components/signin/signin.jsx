import React, {useState} from "react";

import "./signin.scss";
import FormInput from "../formInput/form-input";
import CustomButton from "../custom-button/custom-button";
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action'

const SignIn = ({signInWithEmail, signInWithGoogle}) => {
 
  const [userCredential, setCredential] = useState({email: '', password: ''});

  const {email, password} = userCredential;

  const handelChange = (event) => {
    const { name, value } = event.target;
    setCredential({...userCredential,  [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    console.log(email,password)
    signInWithEmail(email,password)
  };

  return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">sign in with your email and password</span>

        <form onSubmit={handelSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handelChange}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handelChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} googleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email,password) => dispatch(emailSignInStart({email,password}))
  }
}
export default connect(null,mapDispatchToProps)(SignIn);
