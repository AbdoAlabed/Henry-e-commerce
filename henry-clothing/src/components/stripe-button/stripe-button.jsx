import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HBoG2BajtlJoKOXqyGscSHms7IiNnrs6OvdP7sBJvh7PHIUu8l8zF4GM7hZ3mRlgvsI4T3aYrCNDGZLc7O4TDDi005ccQ9jvZ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Henry Clothing LTD"
      billingAddress
      shippingAddress
      image="https://png.pngtree.com/element_pic/16/05/30/11574bb301599cc.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckButton;
