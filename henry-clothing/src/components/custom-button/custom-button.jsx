import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, googleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        googleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
