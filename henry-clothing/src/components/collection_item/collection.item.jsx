import React from "react";

import "./collection.item.scss";
import CustomButton from "../custom-button/custom-button";
import { cartItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, cartItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => cartItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartItem: (item) => dispatch(cartItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
